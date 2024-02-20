
export default function ProfilePicture() {

    const imageUrl = './src/assets/200x200_dror.png'

    const handleClick = (e)=> e.target.style.borderRadius = '50%'

    return (
        <img src={imageUrl} onClick={(e)=>handleClick(e)} />
    )
}
