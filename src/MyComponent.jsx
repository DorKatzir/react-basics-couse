import { useState } from "react"

export default function MyComponent() {

    const [name, setName] = useState('Guest')
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState('')
    const [payment, setPayment] = useState('')
    const [shipping, setShipping] = useState('Delivery')

    function handleNameChange(event){
        event.preventDefault()
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        event.preventDefault()
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        event.preventDefault()
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        event.preventDefault()
        setPayment(event.target.value) 
    }

    function handleShippingChange(event){
        setShipping(event.target.value) 
    }

    return (
		<div>
			{/* Text */}
			<div className='form-box'>
				<input type='text' value={name} onChange={handleNameChange} />
				<p>
					<span>Name:</span> {name}
				</p>
			</div>

			{/* Number */}
			<div className='form-box'>
				<input
					type='number'
					value={quantity}
					onChange={handleQuantityChange}
				/>
				<p>
					<span>Quantity:</span> {quantity}
				</p>
			</div>

			{/* Textarea */}
			<div className='form-box'>
				<textarea
					cols='30'
					rows='5'
					value={comment}
					onChange={handleCommentChange}
					placeholder='Enter delivery instructions'
				/>
				<p>
					<span>Comment:</span> {comment}
				</p>
			</div>

			{/* Select Options */}
			<div className='form-box'>
				<select value={payment} onChange={handlePaymentChange}>
					<option value=''>Select an option</option>
					<option value='Visa'>Visa</option>
					<option value='Mastercard'>Mastercard</option>
					<option value='Giftcard'>Giftcard</option>
				</select>
				<p>
					<span>Payment:</span> {payment}
				</p>
			</div>

			{/* Radio Btns */}

			<label>
				<input
					type='radio'
					value='Pick Up'
					checked={shipping === 'Pick Up'}
					onChange={handleShippingChange}
				/>
				Pick Up
			</label>
			<br />
			<label>
				<input
					type='radio'
					value='Delivery'
					checked={shipping === 'Delivery'}
					onChange={handleShippingChange}
				/>
				Delivery
			</label>

			<p>
				<span>Shipping:</span> {shipping}
			</p>
		</div>
	)
}
