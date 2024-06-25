import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
    if(req.cookies.get('auth')) return NextResponse.json({ token: req.cookies.get('auth')?.value })

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

        const { token } = await res.json();

        let response =  NextResponse.json({ token });
        response.cookies.set('auth', token, { secure: true, path: '/', sameSite: 'none'});

        return response;
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e })
    }
}

export async function GET(req: NextRequest) {
    console.log("REQ GET ->", req.cookies)
    const cookiesStore = cookies();

    try {
        let auth = cookiesStore.get('auth')
        console.log("AQUIIIIIIII GET")
        console.log(auth)
        return NextResponse.json({ auth: auth ? true : false })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e })
    }
}