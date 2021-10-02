import QuestionModel from '../model/question'
import styles from '../styles/Question.module.css'
import QuestionTitle from './QuestionTitle'
import Answer from './Answer'
import Timer from "./Timer";

const options = [
    {value: 'A', color: '#f2c866'},
    {value: 'B', color: '#f266ba'},
    {value: 'C', color: '#85d4f2'},
    {value: 'D', color: '#bce596'},

]

interface QuestionProps {
    question: QuestionModel
    timeToAnswer?: number
    onResponse: (index: number) => void
    timeIsOver: () => void
}

export default function Question(props: QuestionProps) {
    const question = props.question

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return (
                <Answer
                    key={`${question.id}-${i}`}
                    answer={answer}
                    index={i}
                    option={options[i].value}
                    optionColor={options[i].color}
                    onResponse={props.onResponse}
                />
            )
        })
    }

    return (
        <div className={styles.question}>
            <QuestionTitle text={question.title} />
            <Timer
                key={question.id}
                duration={props.timeToAnswer ?? 10}
                timeIsOver={props.timeIsOver}
            />
            {renderAnswers()}
        </div>
    )
}
