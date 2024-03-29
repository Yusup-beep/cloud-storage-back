import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateFolderDto } from './dto/create-folder.dto'
import { FolderService } from './folder.service'

@ApiTags('Folders')
@Controller('folder')
export class FolderController {
	constructor(private readonly folderService: FolderService) {}

	@Post()
	createFolder(@Body() dto: CreateFolderDto) {
		return this.folderService.createFolder(dto)
	}
}
