import { NextRequest, NextResponse } from 'next/server';


export async function middleware(req: any) {
    const token = req.cookies.get('auth');

    if (!token) {
        const data = await fetchData();
        const authToken = data.token;

        if (authToken) {
            const res = NextResponse.next();
            res.cookies.set('auth', authToken, { httpOnly: true, secure: true, path: '/' });
            return res;
        }
    }

    if (req.nextUrl.pathname.startsWith('/api/generate-sas-token')) {
        const authCookie = req.cookies.get('auth');
        
        if (authCookie) {
            const modifiedReq = new Request(req.url, {
                method: req.method,
                headers: {
                    ...Object.fromEntries(req.headers.entries()),
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authCookie}`
                },
                body: req.body,
            });

            return NextResponse.next({ request: modifiedReq });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};


async function fetchData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STORAGE_URL}/api/authorize/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "email": process.env.NEXT_PUBLIC_API_EMAIL,
                "password": process.env.NEXT_PUBLIC_API_PASSWORD
            })
        });

        const data = await res.json();
        console.log("TOKEEEN", data)
        return data;
    } catch (e) {
        console.log(e)
    }
}