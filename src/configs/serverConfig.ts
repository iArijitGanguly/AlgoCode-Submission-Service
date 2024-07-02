import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: parseInt(process.env.PORT || '3002'),
    REDIS_PORT: parseInt(process.env.REDIS_PORT || '6379'),
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
    ATLAS_DB_URL: process.env.ATLAS_DB_URL || '',
    NODE_ENV: process.env.NODE_ENV || ''
};