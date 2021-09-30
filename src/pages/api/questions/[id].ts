import questions from './questions-database'

export default function handler(req, res) {
    const selectedId = Number(req.query.id)

    const questionSelected = questions.filter(question => question.id === selectedId)

    if (questionSelected.length === 1) {
        res.status(200).json(questionSelected[0].convertToObject())
    }
    res.status(204).send()
}
