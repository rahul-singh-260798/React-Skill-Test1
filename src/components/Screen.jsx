import { useContext } from 'react'
import style from '../assets/Screen.module.css'
import { ExpressionContext, ResultContext } from '../Provider/ExpressionProvider'

export default function Screen(){

    const [expression] = useContext(ExpressionContext);
    const [result] = useContext(ResultContext)
    return(
    <section className={style.screenSection}>
        <p className={style.screenExpression} > {expression} </p>
        <p className={`${style.screenInputOutput} display-6`} > {result} </p>
    </section>
    )
}