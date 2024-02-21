import { useState } from "react"

export default function MyComponent() {

	const [car, setCar] = useState({year:2024, 
									make:'Ford', 
									model:'Mustang'})

	function handleYearChange (event) {
		setCar( c => ({ ...c, year: event.target.value }))
	}
	function handleMakeChange (event) {
		setCar(c => ({...c, make: event.target.value}))	
	}
	function handleModelChange (event) {
		setCar(c => ({...c, model: event.target.value}))	
	}
   
    return (
		<div>
			<p>
				<span>Your favorite car is: </span><br />
				{car.year} {car.make} {car.model}
			</p>

			<input type='number' value={car.year} onChange={handleYearChange} placeholder="Year" />
			<input type='text' value={car.make} onChange={handleMakeChange} placeholder="Name" />
			<input type='text' value={car.model} onChange={handleModelChange} placeholder="Model" />
		</div>
	)
}
