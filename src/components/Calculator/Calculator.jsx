import React, { } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sum, subtract } from '../../store/Calculator/Calculator.action';

function Calculator() {
    const dispatch = useDispatch();
    const result = useSelector(state => state.calculator);
    const [a, setA] = React.useState(0);
    const [b, setB] = React.useState(0);

    return (
        <>
            <input type='number' placeholder='a' value={a} onChange={(e) => setA(Number(e.target.value))} />
            <input type='number' placeholder='b' value={b} onChange={(e) => setB(Number(e.target.value))} />
            <button onClick={() => { dispatch(sum(a, b)) }}>Somar</button>
            <button onClick={() => { dispatch(subtract(a, b)) }}>Somar</button>

            <div>
                {result}
            </div>
        </>
    )
}
export default Calculator;