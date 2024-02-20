

export default function Button() {
  
  const handleClick = e => e.target.textContent = 'OUTCH! 🤕'

  return (
    <button onDoubleClick={(e)=>handleClick(e)} className="button">Click me 😄</button>
  )
}
