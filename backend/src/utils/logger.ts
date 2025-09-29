export function logInfo(message: string, ...meta: unknown[]): void {
	console.log(`[INFO] ${message}`, ...meta);
}

export function logError(message: string, error?: unknown): void {
	console.error(`[ERROR] ${message}`);
	if (error) console.error(error);
}


