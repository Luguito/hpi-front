import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
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

        // Guardar el token en localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('authToken', data.token);
        }

        let nextRes = NextResponse.json({ token: data.token })

        nextRes.cookies.set('auth', data.token, { httpOnly: true, secure: true, path: '/' });

        return nextRes;
    } catch (e) {
        console.log(e)
    }
}