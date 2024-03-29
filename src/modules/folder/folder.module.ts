import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Folder } from 'src/entities/folder.entity'
import { User } from 'src/entities/user.entity'
import { FolderController } from './folder.controller'
import { FolderService } from './folder.service'

@Module({
	imports: [TypeOrmModule.forFeature([Folder, User])],
	controllers: [FolderController],
	providers: [FolderService]
})
export class FolderModule {}
