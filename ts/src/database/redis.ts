import Redis from 'ioredis';
import { RedisAS_CONFIG } from '../const';

const redis = new Redis(RedisAS_CONFIG);

export default redis;