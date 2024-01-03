import path from 'path';
import fs from 'fs/promises';
import { Res } from '@/types';

type NewsParams = {
    category: string;
    language: string;
    countly?: string;
}

export async function getNewsExtractCategory({
    category,
    language,
    countly
}: NewsParams = {
        category: 'top',
        language: 'jp',
        countly: 'jp'
    }) {
    let apiUrl: Partial<string> = "";
    let data: Partial<Res> = {};

    if (process.env.NODE_ENV === 'production') {
        const url = new URL(process.env.NEWS_API_URL!);
        url.searchParams.append('apikey', process.env.NEWS_API_KEY!);
        if (countly) {
            url.searchParams.append('country', countly);
        }
        url.searchParams.append('language', language);
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
            console.log("debugger log apiUrl: ", apiUrl);
            const response = await fetch(apiUrl);
            data = await response.json();
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return data.results
}