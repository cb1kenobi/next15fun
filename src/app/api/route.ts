import type { NextRequest } from 'next/server';
import { spawnSync } from 'node:child_process';

export function GET(req: NextRequest) {
	let javaVersion = '';
	try {
		// spawn java version
		const result = spawnSync('java', ['-version']);
		javaVersion = result.stderr?.toString() ?? 'hmmm...';
		return new Response(`Hello World (${javaVersion})`);
	} catch (error) {
		return new Response(`Hello World (${error})`);
	}
}
