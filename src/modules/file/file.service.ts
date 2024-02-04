import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { File } from 'src/entities/file.entity'
import { User } from 'src/entities/user.entity'
import { Repository } from 'typeorm'
import { CreateFileDto } from './dto/create-file.dto'
@Injectable()
export class FileService {
	constructor(
		@InjectRepository(File) private fileRepository: Repository<File>,
		@InjectRepository(User) private userRepository: Repository<User>
	) {}
	async create(createFileDto: CreateFileDto, file: Express.Multer.File) {
		const newFile = new File()
		newFile.name = createFileDto.name
		const user = await this.userRepository.findOneBy({
			email: 'user@example.com'
		})
		newFile.user = user
		return this.fileRepository.save(newFile)
	}

	getAll() {
		return this.fileRepository.find()
	}
}
