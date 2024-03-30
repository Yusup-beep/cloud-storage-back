import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as express from 'express'
import { join } from 'path'
import { AppModule } from './app.module'
import { setupSwagger } from './config/swagger.config'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.enableCors({ credentials: true, origin: true })
	app.useGlobalPipes(new ValidationPipe())

	app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))
	app.setGlobalPrefix('api/v1')
	setupSwagger(app)
	const port = process.env.PORT || 3000
	console.log(port)
	await app
		.listen(port, '0.0.0.0')
		.then(async () => console.log(await app.getUrl()))
}

bootstrap()
