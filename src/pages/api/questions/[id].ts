import questions from './questions-database'

export default function handler(req, res) {
    const selectedId = Number(req.query.id)

    const questionSelected = questions.filter(question => question.id === selectedId)

    if (questionSelected.length === 1) {
        const question = questionSelected[0].randomizeAnswers()
        res.status(200).json(question.convertToObject())
    }
    res.status(204).send()
}
