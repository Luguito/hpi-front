import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
    const cookieStore = cookies();

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


        return NextResponse.json({ token: data.token });
    } catch (e) {
        console.log(e)
    }
}