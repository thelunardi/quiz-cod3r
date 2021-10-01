import {useState} from 'react'

import Question from '../components/Question'
import QuestionModel from '../model/question'
import AnswerModel from '../model/answer'

const questionMock = new QuestionModel(1, 'Mah oi', [
    AnswerModel.wrongAnswer('Green'),
    AnswerModel.wrongAnswer('Black'),
    AnswerModel.wrongAnswer('Yellow'),
    AnswerModel.rightAnswer('Blue'),
])

export default function Home() {
    const [question, setQuestion] = useState(questionMock)

    function onResponse(index: number) {
        setQuestion(question.answerWith(index))
    }

    function timeIsOver() {
        if (question.wasNotAnswered) {
            setQuestion(question.answerWith(-1))
        }
    }

    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Question question={question} onResponse={onResponse} timeIsOver={timeIsOver}/>
        </div>
    )
}
