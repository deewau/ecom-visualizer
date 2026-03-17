// server/routes/generation.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Настройка хранилища для загруженных картинок (временная папка)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload = multer({ dest: path.join(__dirname, '../uploads') });

router.post('/', upload.single('productImage'), async (req, res) => {
    try {
        const { contextType, prompt } = req.body;
        const imageFile = req.file;

        if (!imageFile) {
            return res.status(400).json({ error: 'Изображение не загружено' });
        }

        console.log(`📥 Получен запрос: Тип=${contextType}, Промпт=${prompt}, Файл=${imageFile.filename}`);

        // TODO: Здесь будет вызов AI сервиса (шаг 3)
        
        // Пока возвращаем мок-ответ для проверки связи
        setTimeout(() => {
            res.json({
                success: true,
                message: 'Запрос принят в обработку (это тестовый ответ)',
                // В будущем здесь будет URL сгенерированного изображения
                imageUrl: 'https://via.placeholder.com/512x512?text=AI+Result+Coming+Soon' 
            });
        }, 1000);

    } catch (error) {
        console.error('Ошибка генерации:', error);
        res.status(500).json({ error: 'Ошибка сервера при обработке запроса' });
    }
});

export default router;