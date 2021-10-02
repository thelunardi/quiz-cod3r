import Link from 'next/link'
import styles from '../styles/Button.module.css'

interface ButtonProps {
    text: string
    href?: string
    onClick?: (event: any) => void
}

export default function Button(props: ButtonProps) {
    function renderButton() {
        return (
            <button
                className={styles.button}
                onClick={props.onClick}
            >
                {props.text}
            </button>
        )

    }

    return props.href ? (
        <Link href={props.href}>
            {renderButton()}
        </Link>
    ) : renderButton()
}
