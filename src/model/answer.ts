export default class AnswerModel {
    #value: string
    #isAnswerRight: boolean
    #wasShown: boolean

    constructor(value: string, isAnswerRight: boolean, wasShown = false) {
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

    showAnswer() {
        return new AnswerModel(this.#value, this.#isAnswerRight, true)
    }

    convertToObject() {
        return {
            value: this.#value,
            isAnswerRight: this.#isAnswerRight,
            wasShown: this.#wasShown,
        }
    }
}
