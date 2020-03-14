import React from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, reset, signIn} from "../actions";

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispach = useDispatch();

    return (
        <div className="App">
            <header className="App-header">

                <div>
                    <button onClick={() => dispach(increment())}>+</button>
                    <button onClick={() => dispach(increment(5))}>+5</button>
                    <button onClick={() => dispach(reset())}>Reset</button>
                    <button onClick={() => dispach(decrement())}>-</button>
                    <button onClick={() => dispach(decrement(5))}>-5</button>
                </div>
                <p>Counter: {counter}</p>

                <div>
                    <button onClick={() => dispach(signIn())}>LogIn</button>
                </div>

                {isLogged ? <p>Valuable information only for logged users</p> : ''}
            </header>
        </div>
    );
}

export default App;
