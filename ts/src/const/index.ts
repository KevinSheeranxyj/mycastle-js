import { RedisOptions } from "ioredis";

require('dotenv').config({path: ['.env.local', '.env']});


declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REDIS_HOST: string;
            REDIS_PORT: string;
            REDIS_PASSWORD: string;
        }
    }
}

export const RedisAS_CONFIG : RedisOptions = {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD,
}

export type INLINE = {
    id: string;
}

