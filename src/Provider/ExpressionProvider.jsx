import { createContext, useState } from "react";

export const ExpressionContext = createContext();
export const ResultContext = createContext();


export default function ExpressionProvider(props) {

    const [expression, setExpression] = useState([]);
    return (
        <ExpressionContext.Provider value={[expression, setExpression]}>
            {props.children}
        </ExpressionContext.Provider>
    )
}

export function ResultProvider(props) {

    const [result, setResult] = useState(0);
    return (
        <ResultContext.Provider value={[result, setResult]}>
            {props.children}
        </ResultContext.Provider>
    )
}