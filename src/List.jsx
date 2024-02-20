import PropTypes from 'prop-types'

export default function List( props ) {

    // const fruits = [{id: 1, name:'apple', calories: 95}, 
    //                 {id: 2, name:'orange', calories: 45}, 
    //                 {id: 3, name:'banana', calories: 105}, 
    //                 {id: 4, name:'coconut', calories: 159}, 
    //                 {id: 5, name:'pineapple', calories: 37}]

    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories) // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories) // REVERSE NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100) // LOW CALORIES
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)  // HIGH CALORIES

    // const listItems = fruits.map( fruit => <li key={fruit.id}>
    //                                                {fruit.name} : &nbsp; 
    //                                                <strong>{fruit.calories}</strong> cal</li>)


    const category = props.category
    const items = props.items

    const listItems = items.map( item => <li key={item.id}>
                                                   {item.name}
                                                   <strong>{item.calories}</strong></li>)

    return (
        <div className='list'>
            <h3 className='list-category'>{category}</h3>
            <ol className='list-items'>{listItems}</ol>
        </div>
    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
                                            id:PropTypes.number, 
                                            name:PropTypes.string, 
                                            calories:PropTypes.number
                                        })),
}

List.defaultProps = {
    category: 'Category',
    items: []
}