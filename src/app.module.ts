import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeOrmConfig from './config/typeorm.config'
import { File } from './entities/file.entity'
import { User } from './entities/user.entity'
import { AuthModule } from './modules/auth/auth.module'
import { FileModule } from './modules/file/file.module'
import { UserModule } from './modules/user/user.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),

		TypeOrmModule.forRoot(typeOrmConfig()),
		TypeOrmModule.forFeature([User, File]),

		UserModule,
		AuthModule,
		FileModule
	]
})
export class AppModule {}
