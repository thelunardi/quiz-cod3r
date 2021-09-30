import questions from '../questions/questions-database'

export default function handler(req, res) {
    res.status(200).json(questions.map(question => question.id))
}
