export default function Video() {
    return (
        <>
        <article>
            <video controls playsInline 
            className="w-full 
                px-36
                h-[53em]
                md:mb-10">
                <source src="https://storage.googleapis.com/dexfreight-webapp-assets/hpi-assets/Hutchison%20Port%20ENG%20NM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </article>
        </>
    )
}