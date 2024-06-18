import { CACHE_IMAGES } from "@/cache";
import Image from "next/image";

export default async function StorageImage({ name, width, height, ...props}: any) {
    let imageUrl = await getImageFromStorage(name);

    return (
        <Image src={imageUrl} width={width} height={height} alt=""  {...props}/>
    )
}

export async function getImageFromStorage(name: string) {
    if(CACHE_IMAGES[name]) return CACHE_IMAGES[name];

    let res = await fetch(`${process.env.NEXT_PUBLIC_STORAGE_URL}/api/generate-sas-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 34|SSgE9uiRbECGXcqCXtip4Qnit2BvbWtAWl5W4wfX41d8af93`,
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