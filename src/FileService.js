import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
    saveImage(image) {
        try {
            const imageName = uuid.v4() + '.png';
            const imagePath = path.resolve('files', imageName);
            image.mv(imagePath);
            return imageName;
        } catch (error) {
            console.log('FileService:\n', error)
        }
    }
};

export default new FileService();