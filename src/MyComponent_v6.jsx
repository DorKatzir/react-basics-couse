/* eslint-disable no-mixed-spaces-and-tabs */

import { useState, useEffect } from 'react'

export default function MyComponent() {

   const [count, setCount] = useState(0)
   const [color, setColor] = useState('DodgerBlue')

   useEffect( ()=>{
        document.title = `Count: ${count} ${color}`

        return ()=>{
            //Some CLEANUP Code
        }
        
    }, [count, color])

    return (
        <>
		    <p>Count: {count}</p>
            <button onClick={()=>setCount(c=>c+1)}>+</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(c=>c-1)}>-</button>

		    <p style={{ color: color }}>Color: {color}</p>
            <button onClick={()=>setColor(c => c == 'DodgerBlue' ? 'Gold' : 'DodgerBlue')}>Change color</button>
            
        </>
	)
}
