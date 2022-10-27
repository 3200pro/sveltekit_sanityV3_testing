export function getPagesQuery() {
	return /* groq */ `*[_type == "page"]{title, content}`;
}

export function getHomePageQuery() {
	return /* groq */ `*[_type == "site.page" && slug.current == "homepage"]{title, content, 

	}`;
}

export function getSiteSettings() {
	return /* groq */ `
	*[]
    `;
}
    