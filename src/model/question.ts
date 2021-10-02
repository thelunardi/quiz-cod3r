import AnswerModel from './answer'
import {randomArrayNumber} from '../functions/arrays'
import questions from "../pages/api/questions/questions-database";

export default class QuestionModel {
    #id: number
    #title: string
    #answers: AnswerModel[]
    #isAnswerRight: boolean

    constructor(id: number, title: string, answers: AnswerModel[], isAnswerRight = false) {
        this.#id = id
        this.#title = title
        this.#answers = answers
        this.#isAnswerRight = isAnswerRight
    }

    get id() {
        return this.#id
    }

    get title() {
        return this.#title
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

    get wasNotAnswered() {
        return !this.wasAnswered
    }

    answerWith(index: number): QuestionModel {
        const answeredRight = this.#answers[index]?.isAnswerRight
        const answers = this.#answers.map((answer, i) => {
            const answerSelected = index === i

            // lógica para exibir a questão correta, independentemente da resposta
            const mustShowAnswer = answerSelected || answer.isAnswerRight
            return mustShowAnswer ? answer.showAnswer() : answer

            // retorno para NÃO exibir a questão correta caso o user erre
            // return answerSelected ? answer.showAnswer() : answer
        })
        return new QuestionModel(this.id, this.title, answers, answeredRight)
    }

    randomizeAnswers(): QuestionModel {
        let randomAnswers = randomArrayNumber(this.#answers)
        return new QuestionModel(this.#id, this.#title, randomAnswers, this.#isAnswerRight)
    }

    // como o objeto tem os mesmos atributos, é possível utilizar o type
    static convertObjectToModel(object: QuestionModel): QuestionModel {
        const answers = object.answers.map(response => AnswerModel.convertObjectToModel(response))
        return new QuestionModel(object.id, object.title, answers, object.isAnswerRight)
    }

    convertToObject() {
        return {
            id: this.#id,
            title: this.#title,
            wasAnswered: this.wasAnswered,
            isAnswerRight: this.#isAnswerRight,
            answers: this.#answers.map(answer => answer.convertToObject())
        }
    }
}
