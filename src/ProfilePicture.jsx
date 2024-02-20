import imageUrl from './assets/200x200_dror.png'

export default function ProfilePicture() {

    const handleClick = (e)=> e.target.style.borderRadius = '50%'

    return (
        <img src={imageUrl} onClick={(e)=>handleClick(e)} />
    )
}
