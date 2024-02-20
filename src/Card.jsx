/* eslint-disable react/no-unescaped-entities */
import profilePic from  './assets/200x200_dror.png'

export default function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="Dror profile picture" />
            <h2 className='card-title'>Dror Katzir</h2>
            <p className='card-text'>Web Developer & Graphic Designer</p>
        </div>
    )
}
