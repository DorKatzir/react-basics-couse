import { useState } from 'react'


export default function Counter() {

    const [count, setCount] = useState(0)

    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }
    const reset = ()=>{
        setCount(0)
    }

    return (
		<>
			<div className='counter-container'>
				<p className='count-display'>{count}</p>
				<button onClick={decrement}>-</button>
				<button disabled={ count === 0 ? true : false} onClick={reset}>Reset</button>
				<button onClick={increment}>+</button>
			</div>
		</>
	)
}
