import AnswerModel from '../model/answer'
import styles from '../styles/Answer.module.css'

interface AnswerProps {
    answer: AnswerModel
    index: number
    option: string
    optionColor: string
    onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.answer
    return (
        <div className={styles.answer} onClick={() => props.onResponse(props.index)}>
            <div className={styles.content}>
                {!answer.wasShown ? (
                    <div className={styles.front}>
                        <div
                            className={styles.option}
                            style={{backgroundColor: props.optionColor}}
                        >
                            {props.option}
                        </div>
                        <div className={styles.value}>
                            {answer.value}
                        </div>
                    </div>
                ) : (
                    <div className={styles.back}>
                        {answer.isAnswerRight ? (
                            <div className={styles.right}>
                                <div>A resposta certa é ...</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        ) : (
                            <div className={styles.wrong}>
                                <div>A resposta informada está errada...</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
