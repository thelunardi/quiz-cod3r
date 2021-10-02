import {useRouter} from 'next/router'

import styles from '../styles/Result.module.css'
import Statistic from '../components/Statistic'
import Button from "../components/Button";

export default function Result() {
    const router = useRouter()

    const total = Number(router.query.total)
    const rightAnswers = Number(router.query.rightAnswers)
    const percent = Math.round((rightAnswers / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Resultado Final</h1>
            <div style={{
                display: 'flex'
            }}>
                <Statistic
                    text='Perguntas'
                    value={total}
                />
                <Statistic
                    text='Certas'
                    value={rightAnswers}
                    backgroundColor='#9cd2a4'
                />
                <Statistic
                    text='Percentual'
                    value={`${percent}%`}
                    backgroundColor='#de6a33'
                />
            </div>
            <Button text='Tentar Novamente' href='/' />
        </div>
    )
}
