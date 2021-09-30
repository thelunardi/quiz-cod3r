import AnswerModel from './answer'

export default class QuestionModel {
    #id: number
    #question: string
    #answers: AnswerModel[]
    #isAnswerRight: boolean

    constructor(id: number, question: string, answers: AnswerModel[], isAnswerRight = false) {
        this.#id = id
        this.#question = question
        this.#answers = answers
        this.#isAnswerRight = isAnswerRight
    }

    get id() {
        return this.#id
    }

    get question() {
        return this.#question
    }

    get answers() {
        return this.#answers
    }

    get isAnswerRight() {
        return this.#isAnswerRight
    }

    get wasAnswered() {
        // TODO: implementar com reduce
        for (let answer of this.#answers) {
            if (answer.wasShown) {
                return true
            }
        }
        return false
    }

    convertToObject() {
        return {
            id: this.#id,
            question: this.#question,
            answers: this.#answers.map(answer => answer.convertToObject()),
            isAnswerRight: this.#isAnswerRight
        }
    }
}
