import picture from '../../assests/picture.jpg'
import {FiSearch} from 'react-icons/fi'
import './index.css'
import LoginForm from '../LoginForm'
import { useHistory } from "react-router-dom"


const ThankYouPage = ()=> {



    return(
        <div className='welcomecontainer'>
            <div>
            <img src={picture} className='image'/>
            </div>
            <hr className='break'/>
            <div className='container'>
            <div className='line'>
                <p className='paragraph'>re<span className='icon'><FiSearch color='red' size={20}/></span></p>
                <h1 className='heading'>Thank You!<br/><span>We'll back to you soon.</span></h1>
                <p className='paragraph1'>Please check your email.</p>
            </div>
            </div>

        </div>
    )
}

export default ThankYouPage