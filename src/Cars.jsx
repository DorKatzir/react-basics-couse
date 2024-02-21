import { useState } from "react"

export default function Cars() {
    const [cars, setCars] = useState([
                                        {   
                                            year: 2024, 
                                            make: 'Mercedes', 
                                            model: 'Benz'
                                        },

                                    ])
    const currYear = new Date().getFullYear()
    const [carYear, setCarYear] = useState(currYear)
    const [carMake, setCarMake] = useState('')
    const [carModel, setCarModel] = useState('')

    function handleAddCar(){
        if (!carYear || !carModel || !carMake) return null

        const newCar = { year: carYear, make: carMake, model: carModel }

        setCars(c => [...c, newCar])
        
        setCarYear(currYear)
        setCarMake('')
        setCarModel('')

    }

    function removeCar(index){

        setCars(c => c.filter((_, i) => i !== index))
        console.log(index)
    }

    function handleYearChange(e){
        setCarYear(Number(e.target.value))
    }
    function handleMakeChange(e){
        setCarMake(e.target.value)
    }
    function handleModelChange(e){
        setCarModel(e.target.value)
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <div className="app-container">
                <div className="form-container">
                    <input type="number" value={carYear} onChange={handleYearChange}/>
                    <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car Name"/>
                    <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car Model"/>
                    <button onClick={handleAddCar}>Add Car</button>
                </div>
                
                <ul className="cars-box">
                    { cars.map((car, index) => <li className="car-box-item" key={index}>
                                                        <div className="close-item" onClick={()=>removeCar(index)}>❌</div>     
                                                        <div><span>Year:</span> {car.year} </div>     
                                                        <div><span>Name:</span> {car.make} </div>     
                                                        <div><span>Model:</span> {car.model} </div>      
                                                </li> )
                    }

                </ul>
            </div>


        </div>
    )
}
