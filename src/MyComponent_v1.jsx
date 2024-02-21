import { useState } from "react"

export default function MyComponent() {

    const [name, setName] = useState('Joe')
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = ()=>{
       setName('Spongebob')
    }

    const incrementAge = () => {
		setAge( age => age +1 )
	}

    const decrementAge = () => {
		setAge(age => age - 1)
	}

    const resetAge = () => {
		setAge(0)
	}

    const toggleEmployedStatus = ()=>{
        setIsEmployed(!isEmployed)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button className="button" onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button className="button" onClick={incrementAge}>Age +</button>
            
            { age >= 1 && <button className="button" onClick={decrementAge}>- Age</button> }
            { age >= 1 && <button className="button" onClick={resetAge}> Clear Age</button> }


            <p>Is Employed: {isEmployed ? 'Yes' : 'No'}</p>
            <button className="button" onClick={toggleEmployedStatus}>Toggle status</button>

        </div>
    )
}
