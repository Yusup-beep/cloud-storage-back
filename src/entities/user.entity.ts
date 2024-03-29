import * as bcrypt from 'bcrypt'
import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'

import { File } from './file.entity'
import { Folder } from './folder.entity'
@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	id!: string

	@Column({ unique: true })
	email!: string

	@Column()
	password!: string

	@OneToMany(() => File, file => file.user)
	files!: File[]

	@OneToMany(() => Folder, folder => folder.user)
	folders: Folder[]

	@CreateDateColumn()
	created_at!: Date

	@UpdateDateColumn()
	updated_at!: Date

	@BeforeInsert()
	@BeforeUpdate()
	async hashPassword() {
		const hashedPassword = await bcrypt.hash(this.password, 10)
		this.password = hashedPassword
	}
}
