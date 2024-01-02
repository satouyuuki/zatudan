import path from 'path';
import fs from 'fs/promises';
import { Res } from '@/types';

export async function getNewsExtractCategory(category = 'top') {
    let apiUrl: Partial<string> = "";
    let data: Partial<Res> = {};

    if (process.env.NODE_ENV === 'production') {
        const url = new URL(process.env.NEWS_API_URL!);
        url.searchParams.append('apikey', process.env.NEWS_API_KEY!);
        url.searchParams.append('country', 'jp');
        url.searchParams.append('language', 'jp');
        url.searchParams.append('prioritydomain', 'top');
        url.searchParams.append('category', category);
        apiUrl = url.toString();
    } else {
        apiUrl = path.join(process.cwd(), process.env.NEWS_API_URL!);
    }

    if (!apiUrl) return;

    try {
        if (apiUrl.endsWith('.json')) {
            const jsonData = await fs.readFile(apiUrl, 'utf-8');
            data = JSON.parse(jsonData);
        } else {
            const response = await fetch(apiUrl);
            data = await response.json();
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return data.results
}