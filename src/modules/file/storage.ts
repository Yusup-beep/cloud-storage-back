import { diskStorage } from 'multer'
import { v4 as uuid } from 'uuid'

const normalizeFileName = (req, file, callback) => {
	const fileExt = file.originalname.split('.').pop()

	callback(null, `${uuid()}.${fileExt}`)
}

export const fileStorage = diskStorage({
	destination: './uploads',
	filename: normalizeFileName
})
