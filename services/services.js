import { API_KEY, endpoint, country } from '../config/config';

export async function services(category = 'general') {
    const url = `${endpoint}?country=${country}&category=${category}&apiKey=${API_KEY}`;
    
    // fetch articles
    let res = await fetch(url);
    
    // await the result json
    let data = await res.json();

    return data.articles;
}