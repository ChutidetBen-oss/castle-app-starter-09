export default function YoutubePlayer() {
    return (
        <div className="p-6 border-2 border-dashed border-teal-500 rounded-lg bg-gray-900 text-center">
            <h2 className="text-xl m-4">Youtube Video Player</h2>
            <iframe
                src="https://www.youtube.com/embed/QAXe1nfo8Jk"
                width="315"
                height="560"
                title="Youtube Video Player"
                allowFullScreen
                >
            </iframe>
        </div>
    );
}