import './Footer.css'
import LOGO from '../images/Logo.png'

function Footer(){
    return(
        <>
        <div className='footer'>
            <div className='footercontainer'>
                <div className='footerSection1'>
                <img src={LOGO}></img>
                <p>Your goal is our target.Not anything in between.We Use</p>
                <p>online marketing platforms and tools to achieve single</p>
                <p>objective-your business result</p>
                </div>

                <div className='footerSection2'>
                    <ul>
                    <li><h3>Our Technologies</h3></li>
                    <li><p>ReactJS</p></li>
                    <li><p>Gatsby</p></li>
                    <li><p>NextJS</p></li>
                    <li><p>NodeJS</p></li>
                    </ul>
                </div>
                <div className='footerSection3'>
                    <ul>
                    <li><h3>Our Services</h3></li>
                    <li><p>Social media Marketing</p></li>
                    <li><p>Web & Mobile App 
                    Development</p></li>
                    <li><p>Data & Analytics</p></li>
                    </ul>
                    </div> 
            </div> 
            <div className='footerbottom'>
                <hr/>
                <p> Privacy Policy  |   Terms & Conditions</p>
                </div>  
        </div>
        </>
    )
}
export default Footer