// get the url of the Srapi API based on the env variable or default local one
export function getStrapiUrl(path: any) {
    return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${path}`
}

// This function will get the url of your medias depending on where they are hosted
export function getStrapiMedia(url: any) {
    if (url == null) {
        return null;
    }
    if (url.startsWith("http") || url.startsWith("//")) {
        return url;
    }
    return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${url}` ;
}

// handle the redirection to the home page if the page we are browsing doesn't exist
export function redirectToHomepage() {
    return {
        redirect: {
            destination: `/`,
            permanent: false,
        }
    }
}

//This function will build the url to fetch on the Strapi API
export function getEnvironmentData(slug: any, locale: any) {
    const slugToReturn = `/${slug}?lang=${locale}`;
    const apiUrl = `/pages?slug=${slug}&_locale=${locale}`;

    return {
        data: getStrapiUrl(apiUrl),
        slug: slugToReturn,
    }
    
}