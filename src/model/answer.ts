export default class AnswerModel {
    #value: string
    #isAnswerRight: boolean
    #wasShown: boolean

    constructor(value: string, wasShown: boolean, isAnswerRight = false) {
        this.#value = value
        this.#isAnswerRight = isAnswerRight
        this.#wasShown = wasShown
    }

    static rightAnswer(value: string) {
        return new AnswerModel(value, true)
    }

    static wrongAnswer(value) {
        return new AnswerModel(value, false)
    }

    get value() {
        return this.#value
    }

    get wasShown() {
        return this.#wasShown
    }

    get isAnswerRight() {
        return this.#isAnswerRight
    }

    convertToObject() {
        return {
            value: this.#value,
            isAnswerRight: this.#wasShown,
            wasShown: this.#wasShown,
        }
    }
}
