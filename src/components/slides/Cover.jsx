import './Cover.css'
import newspapers from '../../assets/newspapers.png'
import scroll from '../../assets/scroll.svg'

const Cover = () => {
    return (
        <div className='cover'>
            <div className='scroll-container'>
                <img src={scroll} className='scroll'/>
            </div>
            <img src={newspapers}/>
        </div>
    )
}

export default Cover;