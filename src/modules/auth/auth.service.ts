import { Injectable, UnauthorizedException } from '@nestjs/common'
import { TokenService } from '../token/token.service'
import { UserService } from '../user/user.service'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
	constructor(private userService: UserService, private readonly tokenService: TokenService) { }
	async login(dto: LoginDto) {
		const { email, password } = dto
		const user = await this.userService.findByEmail(email)
		const valid = user
			? await this.userService.validateCredentials(user, password)
			: false

		if (!valid) {
			throw new UnauthorizedException('Invalid credentials')
		}

		return {
			user: user,
			accessToken: 'access token',
			refreshToken: 'refresh token'
		}
	}
}
