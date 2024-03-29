import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Folder } from 'src/entities/folder.entity'
import { User } from 'src/entities/user.entity'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
	imports: [TypeOrmModule.forFeature([User, Folder])],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule {}
