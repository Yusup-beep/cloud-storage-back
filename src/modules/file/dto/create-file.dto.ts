import { IsString } from 'class-validator'

export class CreateFileDto {
	@IsString()
	name!: string

	// @IsString()
	// path!: string
}
