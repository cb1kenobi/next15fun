import { spawnSync } from 'node:child_process';

export function GET(req: Request, res: Response) {
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
