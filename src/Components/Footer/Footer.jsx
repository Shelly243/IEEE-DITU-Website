import React from 'react'
import "./Footer.css"
import linkedIn from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import github from "../../assets/github.png"
import IEEELogo from "../../assets/ieeelogo.png"
import DITLogo from "../../assets/ditlogo.png"
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate=useNavigate();
    const year=new Date().getFullYear();
    const moveToLinkedin=()=>{
        window.open("https://www.linkedin.com/company/ieeeditu/", "_blank");
    }

    const moveToInstagram=()=>{
        window.open("https://www.instagram.com/ieeeditu/", "_blank");
    }

    const moveToFacebook=()=>{
        window.open("https://www.facebook.com/ieeeditu", "_blank");
    }

    const moveToGithub=()=>{
        window.open("https://github.com/IEEE-DITU", "_blank");
    }

    const navigateToDevelopersPage=()=>{
        navigate("#");
    }

    return (
        <div className='footer'>
            <div className="footerIconLogo">
                <img src={linkedIn} onClick={moveToLinkedin} alt="img not available" />
                <img src={instagram} onClick={moveToInstagram} alt="img not available" />
                <img src={facebook} onClick={moveToFacebook} alt="img not available" />
                <img src={github} onClick={moveToGithub} alt="img not available" />
            </div>
            <div className="teamLink" onClick={navigateToDevelopersPage}>
                Design And Development team.
            </div>
            <div className="footerLogo">
                <img className='ieeeLogo' src={IEEELogo} alt="img not available" />
                <img className='ditLogo' src={DITLogo} alt="img not available" />
            </div>
            <div className="copyright">
                © IEEE Student Branch DIT University, {year}
            </div>
        </div>
    )
}

export default Footer
