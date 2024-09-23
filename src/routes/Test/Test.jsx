import { useEffect, useRef, useState } from 'react'

function VideoPlayer ({src, isPlaying}) {
    const ref = useRef(null);

    useEffect(() => {
        if(isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isPlaying]);
    
    return <video src={src} ref={ref} loop playsInline/>
}

const Test = () => {

    const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className='w-screen h-screen flex flex-col gap-10 justify-center items-center'>
        <button onClick={()=> setIsPlaying(!isPlaying)}
            className='bg-red-500 rounded-xl p-4 text-3xl'>
            {isPlaying ? "pause" : "play" }
        </button>
        <VideoPlayer 
        isPlaying={isPlaying}
        src="https://www.dofactory.com/media/movie.mp4"/>
    </main>
  )
}

export default Test