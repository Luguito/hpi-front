import { headers } from 'next/headers'
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const res = await fetch('http://20.29.41.168:8000/api/authorize/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "email": "devs@dexfreight.io",
                "password": "JD7C46s63.7tHcc"
            })
        });

        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e)
    }
}
