import React, { useContext, useRef } from "react";
import style from '../assets/Key.module.css'
import { ExpressionContext, ResultContext } from "../Provider/ExpressionProvider";

export default function Key({ color, value, clear, del, equalTo }) {

    const targetButton = useRef();
    const [expression, setExpression] = useContext(ExpressionContext);
    const [result, setResult] = useContext(ResultContext)


    function onClickHandler() {
        let value = targetButton.current.value;
        const regExpNumber = /[0-9]/;
        const regExpNonNumber = /(\+|-|x|\.|\/|%)/;

        const checkNumber = regExpNumber.test(value);
        const checkNonNumber = regExpNonNumber.test(value);

        if (checkNumber) {
            value = Number(value);
            setExpression((preVal) => {
                return [...preVal, value]
            })
        } else if (checkNonNumber) {
            setExpression((preVal) => {
                const nonNumber = regExpNonNumber.test(preVal[preVal.length - 1]);
                if (nonNumber) {
                    const newArray = preVal.slice(0, [preVal.length - 1])
                    return [...newArray, value];
                } else {
                    return [...preVal, value]
                }
            });
        } else if (value === "clear") {
            setExpression([]);
            setResult(0)
        } else if (value === "del") {
            setExpression((preVal) => {
                const newArray = preVal.slice(0, [preVal.length - 1])
                return [...newArray];
            });
        } else if (value === "result") {
            let expArray = [...expression];
            expArray = expArray.join('')
            expArray = expArray.split(' ')
            let result = Number(expArray[0]);

            for (let i = 0; i < expArray.length; ++i) {
                switch (expArray[i]) {
                    case 'x':
                        result *= Number(expArray[i + 1]);
                        break;

                    case '+':
                        result += Number(expArray[i + 1]);
                        break;

                    case '-':
                        result -= Number(expArray[i + 1]);
                        break;

                    case '/':
                        result /= Number(expArray[i + 1]);
                        break;

                    case '%':
                        result = (result * Number(expArray[i + 1]) / 100);
                        break;

                    default:
                        break;
                }
            }
            let tempResult = String(result)
            tempResult = tempResult.split('.')
            if (tempResult[1]) {
                const firstThreeDigit = tempResult[1].split('').slice(0, 3).join('')
                tempResult = tempResult[0] + "." + firstThreeDigit;
                setResult(tempResult);
                setExpression([tempResult]);
            } else {
                setResult(result);
                setExpression([result]);
            }
        } else if (value === "MOD") {
            setResult((0 - result))
            setExpression([0 - result])
        }
    }

    return (
        <React.Fragment>
            {
                value &&
                <button
                    onClick={onClickHandler}
                    ref={targetButton}
                    className={color ? `${style.orangeButton} display-6 }` : `${style.grayButton} display-6`}
                    value={value}>
                    {value}</button>
            }
            {
                equalTo &&
                <button
                    onClick={onClickHandler}
                    ref={targetButton}
                    className={`${style.equalToButton} display-6`}
                    value="result">
                    =</button>
            }
            {
                del &&
                <button
                    onClick={onClickHandler}
                    ref={targetButton}
                    className={`${style.clearButton} display-6`}
                    value="del">
                    <i className="fa-solid fa-delete-left"></i></button>
            }
            {
                clear &&
                <button
                    onClick={onClickHandler}
                    ref={targetButton}
                    className={`${style.clearButton} display-6`}
                    value="clear">
                    <i className="fa-solid fa-trash"></i></button>
            }
        </React.Fragment>
    )
}