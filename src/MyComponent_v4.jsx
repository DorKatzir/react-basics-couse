import { useState } from "react"

export default function MyComponent() {

	const [foods, setFoods] = useState(['apple', 'banana', 'orange'])

	function handleAddFood(){
		const newFood = document.getElementById('foodInput').value
		document.getElementById('foodInput').value = ''
		newFood ? setFoods(f =>[...f, newFood]) : null
	}

	function handleRemoveFood(index){
		setFoods( foods.filter((_, i)=> i !== index) )
	}


   
    return (
		<div>
			<h2>List of Food</h2>
			<ul>
				{foods.map((food, index) => 
										<li key={index} onClick={()=> handleRemoveFood(index)} >
											{food}
										</li> )}
			</ul>
			<input type="text" id="foodInput" placeholder="Enter food name" />
			<button onClick={handleAddFood}>Add food</button>
		</div>
	)
}
