import styles from '../styles/Quiz.module.css'
import QuestionModel from '../model/question'
import Question from './Question'
import Button from './Button'

interface QuizProps {
    question: QuestionModel
    isLastQuestion: boolean
    answeredQuestion: (question: QuestionModel) => void
    goToNextStep: () => void
}

export default function Quiz(props: QuizProps) {
    function onResponse(index: number) {
        if(props.question.wasNotAnswered) {
            props.answeredQuestion(props.question.answerWith(index))
        }
    }
    return (
        <div className={styles.quiz}>
            {props.question ?
                <Question
                    question={props.question}
                    onResponse={onResponse}
                    timeIsOver={props.goToNextStep}
                    timeToAnswer={6}
                /> : false
            }
            <Button
                text={props.isLastQuestion ? 'Finalizar' : 'Próxima'}
                onClick={props.goToNextStep}
            />
        </div>
    )
}
