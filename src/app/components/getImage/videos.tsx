import { getImageFromStorage } from "./images";


export default async function StorageVideos({ name, bgColor, ...props }: any) {
    let videoUrl = await getImageFromStorage(name);

    return (
        <div className={`w-full after:content-[''] after:absolute after:top-0 after:left-0 
        after:w-full after:h-full ${!bgColor ? 'your-content' : 'after:' + bgColor}`}>
            <video width="auto" height="100" autoPlay loop muted playsInline className={`${bgColor ? 'opacity-90 rounded-3xl' : ''} `}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}