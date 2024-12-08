import type { Config } from 'drizzle-kit';

export default {
	schema: './drizzle/schema',
	out: './drizzle/migrations',
  dialect: 'sqlite',
	driver: 'expo',
} satisfies Config;
