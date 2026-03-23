"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const const_1 = require("../const");
const redis = new ioredis_1.default(const_1.RedisAS_CONFIG);
exports.default = redis;
