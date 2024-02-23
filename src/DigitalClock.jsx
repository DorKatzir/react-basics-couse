import { useEffect, useState } from "react"

export default function DigitalClock() {

    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000)

        return ()=>{
            clearInterval(intervalId)
        }
    }, [])

    function formatTime(){
        let houres = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        // const meridien = houres >= 12 ? 'PM' : 'AM'

        // houres = houres % 12 || 12

        return `${padZero(houres)}:${padZero(minutes)}:${padZero(seconds)}`
    }

    function padZero(number){
        return (number < 10 ? '0' : '') + number
    }




    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}
