import { CACHE_IMAGES } from "@/cache";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
    const cookieStore = cookies();

    try {
        let authToken = cookieStore.get('auth')?.value;

        // if(!authToken) return NextResponse.json({error: "Token has no been provided, please refresh the page"})

        let { name } = await req.json()

        if (CACHE_IMAGES[name]) {
            return NextResponse.json({ url: CACHE_IMAGES[name] })
        }
        // console.log(process.env.NEXT_PUBLIC_STORAGE_URL)
        let res = await fetch(`${process.env.NEXT_PUBLIC_STORAGE_URL}/api/generate-sas-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
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
        // console.log(e)
        return NextResponse.json({ error: e })
    }
}