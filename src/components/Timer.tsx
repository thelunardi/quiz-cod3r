import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import styles from '../styles/Timer.module.css'

interface TimerProps {
    key: number
    duration: number
    timeIsOver: () => void
}

export default function Timer(props: TimerProps) {
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer
                duration={props.duration}
                isPlaying
                size={120}
                onComplete={props.timeIsOver}
                colors={[
                    ['#bce596', 0.33],
                    ['#f7b801', 0.33],
                    ['#ed827a', 0.33],
                ]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}
