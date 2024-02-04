import {
	Body,
	Controller,
	FileTypeValidator,
	Get,
	HttpException,
	MaxFileSizeValidator,
	ParseFilePipe,
	Post,
	UploadedFile,
	UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiTags } from '@nestjs/swagger'
import { CreateFileDto } from './dto/create-file.dto'
import { FileService } from './file.service'
import { fileStorage } from './storage'

@ApiTags('Files')
@Controller('files')
export class FileController {
	constructor(private readonly fileService: FileService) {}

	@Post('upload')
	@UseInterceptors(
		FileInterceptor('file', {
			storage: fileStorage
		})
	)
	async upload(
		@Body() createFileDto: CreateFileDto,
		@UploadedFile(
			new ParseFilePipe({
				validators: [
					new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
					new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 })
				]
			})
		)
		file: Express.Multer.File
	) {
		if (!file) {
			return new HttpException('File is required', 400)
		}
		return await this.fileService.create(createFileDto, file)
	}

	@Get()
	async getAllFiles() {
		return await this.fileService.getAll()
	}
}
