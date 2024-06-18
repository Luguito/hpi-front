import { CACHE_IMAGES } from "@/cache";

async function getAuthToken() {
    const authCookie = document.cookie.split('; ').find(row => row.startsWith('auth='));
    let token = authCookie ? authCookie.split('=')[1] : null;
    
    return token;
}


export async function getImageFromStorage(name: string) {
    if (CACHE_IMAGES[name]) return CACHE_IMAGES[name];

    // const token = await getAuthToken();


    let res = await fetch(`${process.env.NEXT_PUBLIC_STORAGE_URL}/api/generate-sas-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 97|JOvm3C4pHe7w6Ar7W4YPMf7Kw4kDY4j7eSg3Q1Tubc9ea01f`,
        },
        body: JSON.stringify({
            "blob_name": name,
            "expiry_time_in_minutes": "1440"
        }),
    })

    let url = await res.json();

    CACHE_IMAGES[name] = url.sas_url;

    return url.sas_url
}

