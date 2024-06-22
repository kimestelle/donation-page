import './Cover.css'
import newspapers from '../../assets/newspapers.png'

const Cover = () => {
    return (
        <div className='cover'>
            <img src={newspapers}/>
        </div>
    )
}

export default Cover;