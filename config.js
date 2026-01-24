export const TOKEN = process.env.TOKEN;
export const READING_CHANNELS = (process.env.READING_CHANNELS || '').split(',').filter(Boolean);
export const WRITING_CHANNELS = (process.env.WRITING_CHANNELS || '').split(',').filter(Boolean);
export const WEBHOOKS = (process.env.WEBHOOKS || '').split(',').filter(Boolean);