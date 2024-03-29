import { useContext } from 'react'
import { UserContext } from './ComponentA'

import ComponentD from './ComponentD'

export default function ComponentC() {

    const user = useContext(UserContext)

	return (
		<div className='box'>
			<h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
			<ComponentD />
		</div>
	)
}
