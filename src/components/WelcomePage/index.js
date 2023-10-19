import picture from '../../assests/picture.jpg'
import {FiSearch} from 'react-icons/fi'
import './index.css'
import LoginForm from '../LoginForm'
import { useHistory } from "react-router-dom"


const WelcomePage = ()=> {
    const history = useHistory()
const onchangeSignIn = () => {
    history.push("/login")

}

    return(
        <div className='welcomecontainer'>
            <div>
            <img src={picture} className='image'/>
            </div>
            <hr className='break'/>
            <div className='container'>
            <div className='line'>
                <p className='paragraph'>re<span className='icon'><FiSearch color='red' size={22}/></span></p>
                <h1 className='heading'>Real Estate Investing Information<br/><span>That Matters to You.</span></h1>
                <p className='paragraph1'>Limited to the San Francisco Bay Area -Join Our BETA!</p>
            </div>
            <button type="button" className='button' onClick={onchangeSignIn}>SIGN UP WITH LINKEDIN</button>
            <p className='button1'>SIGN IN</p>
            </div>

        </div>
    )
}

export default WelcomePage