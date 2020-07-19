import React, { useState } from 'react'

function CounterExample() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                PLUS
            </button>

            <button onClick={() => setCount(count - 1)}>
                MINUS
            </button>

            <h1>
                {count}
            </h1>
        </div>
    )
}

export default CounterExample