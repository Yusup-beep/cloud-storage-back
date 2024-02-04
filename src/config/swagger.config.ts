import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export const setupSwagger = (app: INestApplication) => {
	const options = new DocumentBuilder()
		.setTitle('Cloud Storage API')
		.setDescription('The API description')
		.setVersion('1.0')
		.build()

	const document = SwaggerModule.createDocument(app, options)

	SwaggerModule.setup('api', app, document)
}
