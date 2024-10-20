import { useRef } from "react"
import styles from './VideoPlayer.module.css';


const VideoPlayer = () => {
    const ref = useRef()

    const handlePlay = () => {
        ref.current.play()
    }

    const handlePause = () => {
        ref.current.pause()
    }

    return (
        <div className={styles.videoPlayer}>
            <div className={styles.controllers}>
                <button className="btn" onClick={handlePlay}>Play</button>
                <button className="btn" onClick={handlePause}>Pause</button>
            </div>

            <video 
                src="https://www.shutterstock.com/shutterstock/videos/3401757659/preview/stock-footage-advanced-robot-arm-conveyor-line-manufacturing-electronics-enclosure-boxes-animated-aerial-footage.webm"
                ref={ref}
            />
        </div>
    )
}

export default VideoPlayer;