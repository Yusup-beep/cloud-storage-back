import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { User } from './user.entity'

@Entity()
export class File {
	@PrimaryGeneratedColumn('uuid')
	id!: string

	@Column()
	name!: string

	@ManyToOne(() => User, user => user.files)
	user!: User

	@CreateDateColumn()
	created_at!: Date

	@UpdateDateColumn()
	updated_at!: Date
}
