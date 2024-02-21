
import { useState } from 'react'

export default function MyComponent() {

	// const [cars, setCars] = useState([])
	const [carYear, setCarYear] = useState(2)
	// const [carMake, setCarMake] = useState('')
	// const [modelMake, setModelMake] = useState('')

	function handleAddCar(){

	}
	
	function handleRemoveCar(index){
		
	}

	function handleYearChange(event){
		console.log(event.target.value)
	}

	function handleMakeChange(event){
		
	}

	function handleModelChange(event){
		
	}

   
    return (
		<div>
			<h2>List of Car Objects</h2>
			{/* <ul></ul> */}
			
				<input type="number" value={carYear} onChange={handleYearChange}/>


			
		</div>
	)
}
