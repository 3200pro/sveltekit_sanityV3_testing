import { getPagesQuery, getHomePageQuery, getSiteSettings } from '$lib/queries';
import { client } from '$lib/sanityClient';
import { error } from '@sveltejs/kit';

export async function load() {
	const data = await client.fetch(/* groq */ `{
		"pages": ${getPagesQuery()},
		"homepageContent": ${getHomePageQuery()},
		"siteSettings": ${getSiteSettings()}
  }`);
	if (data) {
		data;
	}

	throw error(400, 'not found');
}
