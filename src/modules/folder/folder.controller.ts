import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateFolderDto } from './dto/create-folder.dto'
import { FolderService } from './folder.service'

@ApiTags('Folders')
@Controller('folders')
export class FolderController {
	constructor(private readonly folderService: FolderService) {}

	@Post()
	createFolder(@Body() dto: CreateFolderDto) {
		return this.folderService.createFolder(dto)
	}

	@Get()
	async getAllFolders() {
		return await this.folderService.getAllFolders()
	}
}
