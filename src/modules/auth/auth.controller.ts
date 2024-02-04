import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
	constructor(private readonly authService: AuthService) { }

	@Post('login')
	login(@Body() dto: LoginDto) {
		return this.authService.login(dto)
	}

	@Get('/me')
	getMe() {
		return {
			user: {
				id: 1,
				email: 'q5JQF@example.com',
				password: 'sfds'
			}
		}
	}
}
