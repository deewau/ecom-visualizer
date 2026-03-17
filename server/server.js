// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import generationRoutes from './routes/generation.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Разрешаем запросы с фронтенда
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
// Для загрузки файлов будем использовать multer внутри роута, но здесь можно настроить глобально при необходимости

// Подключаем роуты генерации
app.use('/api/generate', generationRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});