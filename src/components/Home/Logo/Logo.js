import './Logo.scss'
import LogoS from '../../../assets/images/Harsh/oie_97PprImbV4xQ.png'
import { useEffect, useRef } from 'react'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      bgRef.current.style.opacity = '1'
      solidLogoRef.current.style.opacity = '1'
    }, 5000)
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={LogoS} alt="H" ref={solidLogoRef} />
    </div>
  )
}

export default Logo
