import * as qs from 'query-string'
const env = 'prod'

export const wikipediaThumbnailURL =
    "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&formatversion=2&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=600&titles="

export const getWikiPhotoUrl = (photo: string) =>
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(photo || "")}`

export const getPhoto = (name?: string) => {
    return fetch(wikipediaThumbnailURL + encodeURIComponent(name || ""), {
        method: "GET",
    })
}

export const apiBaseUrl = () =>
    env === 'dev' ? 'http://127.0.0.1:5000/' : 'http://caribou-api.herokuapp.com/';

export const getApiUrl = (path: string, queryParams?: any) => {
    const queryString = qs.stringify(queryParams, { arrayFormat: 'comma' })
    return `${apiBaseUrl()}${path}?${queryString}`;
}