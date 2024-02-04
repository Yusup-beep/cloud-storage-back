import { HttpException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { compare } from 'bcrypt'
import { User } from 'src/entities/user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>
	) {}
	async create(createUserDto: CreateUserDto) {
		const { email, password } = createUserDto
		const user = await this.userRepository.findOneBy({ email })
		if (user) {
			throw new HttpException('User already exists', 409)
		}

		const newUser = await this.userRepository.create({ email, password })
		return this.userRepository.save(newUser)
	}

	async findByEmail(email: string) {
		return await this.userRepository.findOneBy({
			email
		})
	}

	async validateCredentials(user: User, password: string) {
		return compare(password, user.password)
	}
}
