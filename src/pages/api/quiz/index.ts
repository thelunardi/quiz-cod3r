import questions from '../questions/questions-database'
import {randomArrayNumber} from '../../../functions/arrays'

export default function handler(req, res) {
    const ids = questions.map(questions => questions.id)
    res.status(200).json(randomArrayNumber(ids))
}
