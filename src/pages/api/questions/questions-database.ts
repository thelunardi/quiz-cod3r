import QuestionModel from '../../../model/question'
import AnswerModel from '../../../model/answer'

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        AnswerModel.wrongAnswer('Abelha'),
        AnswerModel.wrongAnswer('Barata'),
        AnswerModel.wrongAnswer('Pulga'),
        AnswerModel.rightAnswer('Barbeiro'),
    ]),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        AnswerModel.wrongAnswer('Caju'),
        AnswerModel.wrongAnswer('Côco'),
        AnswerModel.wrongAnswer('Chuchu'),
        AnswerModel.rightAnswer('Abóbora'),
    ]),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        AnswerModel.wrongAnswer('Manada'),
        AnswerModel.wrongAnswer('Alcateia'),
        AnswerModel.wrongAnswer('Rebanho'),
        AnswerModel.rightAnswer('Matilha'),
    ]),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        AnswerModel.wrongAnswer('Equilátero'),
        AnswerModel.wrongAnswer('Isóceles'),
        AnswerModel.wrongAnswer('Trapézio'),
        AnswerModel.rightAnswer('Escaleno'),
    ]),
    new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
        AnswerModel.wrongAnswer('Castro Alves'),
        AnswerModel.wrongAnswer('Manuel Bandeira'),
        AnswerModel.wrongAnswer('Carlos Gomes'),
        AnswerModel.rightAnswer('Dom Pedro I'),
    ]),
    new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
        AnswerModel.wrongAnswer('Perder'),
        AnswerModel.wrongAnswer('Fracassar'),
        AnswerModel.wrongAnswer('Desprezar'),
        AnswerModel.rightAnswer('Conseguir'),
    ]),
    new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
        AnswerModel.wrongAnswer('Argentina'),
        AnswerModel.wrongAnswer('Espanha'),
        AnswerModel.wrongAnswer('Brasil'),
        AnswerModel.rightAnswer('Portugal'),
    ]),
    new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        AnswerModel.wrongAnswer('Costa e Silva'),
        AnswerModel.wrongAnswer('Emílio Médici'),
        AnswerModel.wrongAnswer('Ernesto Geisel'),
        AnswerModel.rightAnswer('João Figueiredo'),
    ]),
    new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        AnswerModel.wrongAnswer('Ás'),
        AnswerModel.wrongAnswer('Nove'),
        AnswerModel.wrongAnswer('Rei'),
        AnswerModel.rightAnswer('Valete'),
    ]),
    new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
        AnswerModel.wrongAnswer('Vela'),
        AnswerModel.wrongAnswer('Vento'),
        AnswerModel.wrongAnswer('Vênia'),
        AnswerModel.rightAnswer('Veia'),
    ]),
    new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
        AnswerModel.wrongAnswer('Abrupção'),
        AnswerModel.wrongAnswer('Abolição'),
        AnswerModel.wrongAnswer('Abnegação'),
        AnswerModel.rightAnswer('Ablução'),
    ]),
    new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        AnswerModel.wrongAnswer('Monte Branco'),
        AnswerModel.wrongAnswer('Monte Fuji'),
        AnswerModel.wrongAnswer('Monte Carlo'),
        AnswerModel.rightAnswer('Monte Everest'),
    ]),
    new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        AnswerModel.wrongAnswer('Estômago'),
        AnswerModel.wrongAnswer('Pâncreas'),
        AnswerModel.wrongAnswer('Rim'),
        AnswerModel.rightAnswer('Pescoço'),
    ]),
    new QuestionModel(214, 'A compensação por perda é chamada de...', [
        AnswerModel.wrongAnswer('Déficit'),
        AnswerModel.wrongAnswer('Indexação'),
        AnswerModel.wrongAnswer('Indébito'),
        AnswerModel.rightAnswer('Indenização'),
    ]),
    new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        AnswerModel.wrongAnswer('Cuca'),
        AnswerModel.wrongAnswer('Curupira'),
        AnswerModel.wrongAnswer('Boitatá'),
        AnswerModel.rightAnswer('Saci-pererê'),
    ]),
    new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        AnswerModel.wrongAnswer('Marechal Deodoro'),
        AnswerModel.wrongAnswer('Barão de Mauá'),
        AnswerModel.wrongAnswer('Marquês de Pombal'),
        AnswerModel.rightAnswer('Duque de Caxias'),
    ]),
]

export default questions
