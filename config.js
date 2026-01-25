export const TOKEN = process.env.TOKEN;
export const READING_CHANNELS = (process.env.READING_CHANNELS || '').split(',').filter(Boolean);
export const WRITING_CHANNELS = (process.env.WRITING_CHANNELS || '').split(',').filter(Boolean);
export const EMBED_TITLE = process.env.EMBED_TITLE;
export const EMBED_FOOTER = process.env.EMBED_FOOTER;