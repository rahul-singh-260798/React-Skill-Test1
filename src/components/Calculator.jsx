import React from "react"
import style from '../assets/Calculator.module.css'
import KeyPad from "./keyPad"
import Screen from "./Screen"

export default function Calculator() {
    return (
        <React.Fragment>
            <main className={style.calMain}>
                <section className={style.calSection}>
                    <Screen />
                    <KeyPad />
                </section>
            </main>
        </React.Fragment>
    )
}