"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisAS_CONFIG = exports.REDIS_PASSWORD = exports.REDIS_PORT = exports.REDIS_HOST = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const envCandidates = [
    path_1.default.resolve(process.cwd(), '.env.local'),
    path_1.default.resolve(process.cwd(), '../../.env.local'),
    path_1.default.resolve(__dirname, '../../../.env.local'),
    path_1.default.resolve(__dirname, '../../../../.env.local'),
];
const envPath = envCandidates.find((candidate) => (0, fs_1.existsSync)(candidate));
if (envPath) {
    dotenv_1.default.config({ path: envPath });
}
exports.REDIS_HOST = process.env.REDIS_HOST;
exports.REDIS_PORT = process.env.REDIS_PORT;
exports.REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const redisPort = Number(exports.REDIS_PORT);
if (!Number.isInteger(redisPort) || redisPort < 0 || redisPort > 65535) {
    throw new Error(`Invalid REDIS_PORT: "${exports.REDIS_PORT}". Please set a number between 0 and 65535 in .env.local.`);
}
exports.RedisAS_CONFIG = {
    host: exports.REDIS_HOST,
    port: redisPort,
    password: exports.REDIS_PASSWORD,
};
