import { NextRequest, NextResponse } from 'next/server';


export async function middleware(req: NextRequest) {
    return NextResponse.next();

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

    // if (req.nextUrl.pathname.startsWith('/api/generate-sas-token')) {
    //     const authCookie = req.cookies.get('auth');

    //     if (authCookie) {
    //         try {
    //             const modifiedReq = new Request(req.url, {
    //                 method: req.method,
    //                 headers: {
    //                     ...Object.fromEntries(req.headers.entries()),
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${authCookie}`
    //                 },
    //                 body: req.body,
    //             });

    //             const response = await fetch(modifiedReq);

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }

    //             return NextResponse.next({ request: modifiedReq });
    //         } catch (error) {
    //             // console.error('Fetch error:', error);
    //             // Handle the fetch error gracefully using NextResponse.error
    //             // return NextResponse.json({ error: 'Internal Server Error' }, { statusText: 'Failed to fetch data', status: 500 });
    //         }
    //     }

    // }

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

        return data;
    } catch (e) {
        console.log(e)
    }
}