import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import createConfig from '../../studio/sanity.config';
const { projectId, dataset } = createConfig;

export const client = sanityClient({
	projectId,
	dataset,
	apiVersion: '2022-07-01',
	useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};
