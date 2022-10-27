import { error } from '@sveltejs/kit';
import { getPageQuery, getSiteSettings } from '$lib/queries';
import { client } from '$lib/sanityClient';

export async function load({ params: { slug } }) {
	const page = await client.fetch(/* groq */ `{
		"page": ${getPageQuery(slug)},
		"siteSettings": ${getSiteSettings()}
	}`);
	console.log('Page Data', page);

	if (page) {
		return page;
	}

	throw error(400, 'not found');
}
