import { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext()

export default function ComponentA() {

    const [user, setUser] = useState('Dror')

    return ( 
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
            
        </div>
        
    )
}
