import { CACHE_IMAGES } from "@/cache";

async function getAuthToken() {
    const authCookie = document.cookie.split('; ').find(row => row.startsWith('auth='));
    let token = authCookie ? authCookie.split('=')[1] : null;
    
    return token;
}


export async function getImageFromStorage(name: string) {
    let res = await fetch(`/api/images`, { method: 'POST', body: JSON.stringify({ name }) })

    let { url } = await res.json()


    return url;
}

