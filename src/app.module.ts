import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeOrmConfig from './config/typeorm.config'
import { AuthModule } from './modules/auth/auth.module'
import { FileModule } from './modules/file/file.module'
import { FolderModule } from './modules/folder/folder.module'
import { UserModule } from './modules/user/user.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),

		TypeOrmModule.forRoot(typeOrmConfig()),
		UserModule,
		AuthModule,
		FileModule,
		FolderModule
	]
})
export class AppModule {}
