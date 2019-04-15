import got from 'got';

export default async (): Promise<boolean> => {
	try {
		await got('http://localhost:8081', {
			headers: {
				'user-agent': 'npx-visualize-bundle'
			}
		});
		return true;
	} catch (err) {
		return false;
	}
};
