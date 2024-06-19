import { CACHE_IMAGES } from "@/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    let auth = '';
    
    if (!auth) {
        // let token = await fetch(`${req.nextUrl.origin}/api/token`, { method: "POST" });
        // Usar cookies 
        auth = `141|0fwqJ4Ev9Rd573IzcOfBVwmvzZAZ9YE4BXqkPMUB0daf615e`
    }

    let { name } = await req.json()

    if (CACHE_IMAGES[name]) {
        return NextResponse.json({ url: CACHE_IMAGES[name] })
    }

    let res = await fetch(`${process.env.NEXT_PUBLIC_STORAGE_URL}/api/generate-sas-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth}`,
        },
        body: JSON.stringify({
            "blob_name": name,
            "expiry_time_in_minutes": "1440"
        }),
    })

    let url = await res.json();

    CACHE_IMAGES[name] = url.sas_url;


    return NextResponse.json({ url: url.sas_url })
}