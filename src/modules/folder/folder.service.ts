import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Folder } from 'src/entities/folder.entity'
import { User } from 'src/entities/user.entity'
import { Repository } from 'typeorm'
import { CreateFolderDto } from './dto/create-folder.dto'

@Injectable()
export class FolderService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>,
		@InjectRepository(Folder) private folderRepository: Repository<Folder>
	) {}

	async createFolder(dto: CreateFolderDto) {
		const newFolder = new Folder()
		newFolder.user = await this.userRepository.findOne({
			where: { id: '9ff23970-15c4-45fb-b7b4-84bd2cc32a1e' }
		})
		newFolder.name = dto.name
		return this.folderRepository.save(newFolder)
	}

	async getAllFolders() {
		return await this.folderRepository.find()
	}
}
