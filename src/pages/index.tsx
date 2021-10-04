import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import QuestionModel from '../model/question'
import Quiz from '../components/Quiz'
import getConfig from "next/dist/build/babel/loader/get-config";

const URL_BASE = process.env.BASE_URL ?? 'http://localhost:3000/api'

export default function Home() {
    const router = useRouter()
    const [questionIds, setQuestionIds] = useState<number[]>([])
    const [question, setQuestion] = useState<QuestionModel>()
    const [rightAnswers, setRightAnswers] = useState<number>(0)

    async function loadQuestionIds() {
        const response = await fetch(`${URL_BASE}/quiz`)
        const questionIds = await response.json()
        setQuestionIds(questionIds)
    }

    async function loadQuestion(id: number) {
        const response = await fetch(`${URL_BASE}/questions/${id}`)
        const jsonQuestion = await response.json()
        const newQuestion = QuestionModel.convertObjectToModel(jsonQuestion)
        setQuestion(newQuestion)
    }

    // quando as deps estão vazias, ele muda quando inicia o component
    useEffect(() => {
        loadQuestionIds()
    }, []);

    useEffect(() => {
        questionIds.length > 0 && loadQuestion(questionIds[0])
    }, [questionIds]);

    function answeredQuestion(question: QuestionModel) {
        setQuestion(question)
        const isAnswerRight = question.isAnswerRight
        setRightAnswers(rightAnswers + (isAnswerRight ? 1 : 0))
    }

    function getNextQuestionId() {
        const nextIndex = questionIds.indexOf(question.id) + 1
        return questionIds[nextIndex]
    }

    function goToNextStep() {
        const nextId = getNextQuestionId()
        nextId ? goToNextQuestion(nextId) : finishQuiz()
    }

    function goToNextQuestion(id: number) {
        loadQuestion(id)
    }

    function finishQuiz() {
        router.push({
            pathname: '/result',
            query: {
                total: questionIds.length,
                rightAnswers
            }
        })
    }

    return question ? (
        <Quiz
            question={question}
            isLastQuestion={getNextQuestionId() === undefined}
            answeredQuestion={answeredQuestion}
            goToNextStep={goToNextStep}
        />
    ) : false
}
