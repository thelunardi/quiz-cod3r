import styles from '../styles/QuestionTitle.module.css'

interface QuestionTitleProps {
    text: string
}

export default function QuestionTitle(props: QuestionTitleProps) {
    return (
        <div className={styles.questionTitle}>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}
