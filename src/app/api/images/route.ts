import { CACHE_IMAGES } from "@/cache";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
    const cookieStore = cookies();

    try {
        let authToken = cookieStore.get('auth')?.value;

        let auth = ''
        if (!authToken) {
            let token = await fetch(`${req.nextUrl.origin}/api/token`, { method: "POST" });
            auth = (await token.json()).token;

            cookieStore.set('auth', auth, { httpOnly: true, secure: true, path: '/' })
        }

        let { name } = await req.json()

        if (CACHE_IMAGES[name]) {
            return NextResponse.json({ url: CACHE_IMAGES[name] })
        }

        let res = await fetch(`${process.env.NEXT_PUBLIC_STORAGE_URL}/api/generate-sas-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken ?? auth}`,
            },
            body: JSON.stringify({
                "blob_name": name,
                "expiry_time_in_minutes": "1440"
            }),
        })

        let url = await res.json();

        CACHE_IMAGES[name] = url.sas_url;


        return NextResponse.json({ url: url.sas_url })
    } catch (e) {
        return NextResponse.json({ error: e })
    }
}