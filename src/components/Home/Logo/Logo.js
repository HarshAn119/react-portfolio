import './Logo.scss'
import LogoS from '../../../assets/images/Harsh/H_logo-removebg-1.png'
import { useEffect, useRef } from 'react'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
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
      {/* <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M80 1545 l0 -1425 75 0 75 0 0 -35 0 -35 255 0 255 0 0 600 0 600
                320 0 320 0 0 -565 0 -565 75 0 75 0 0 -35 0 -35 255 0 255 0 0 1425 0 1424
                -72 3 -73 3 -3 33 -3 32 -255 0 -254 0 0 -535 0 -535 -320 0 -320 0 0 500 0
                500 -75 0 -75 0 0 35 0 35 -255 0 -255 0 0 -1425z m490 1385 l0 -30 -170 0
                -170 0 0 -1380 0 -1380 -70 0 -70 0 0 1410 0 1410 240 0 240 0 0 -30z m1308 3
                l-3 -28 -172 -3 -173 -2 0 -500 0 -500 -65 0 -65 0 0 530 0 530 241 0 240 0
                -3 -27z m-1308 -538 l0 -495 -63 0 -64 0 -6 -107 c-4 -58 -7 -204 -7 -325 l0
                -218 70 0 70 0 0 -555 0 -555 -165 0 -165 0 0 1375 0 1375 165 0 165 0 0 -495z
                m150 0 l0 -495 -65 0 -65 0 0 495 0 495 65 0 65 0 0 -495z m1160 -880 l0
                -1375 -165 0 -165 0 0 1375 0 1375 165 0 165 0 0 -1375z m150 -35 l0 -1410
                -240 0 -240 0 0 25 0 25 170 0 170 0 0 1378 c0 758 3 1382 7 1385 3 4 35 7 70
                7 l63 0 0 -1410z m-1460 345 l0 -65 -55 0 -55 0 0 65 0 65 55 0 55 0 0 -65z
                m150 0 l0 -65 -65 0 -65 0 0 65 0 65 65 0 65 0 0 -65z m660 0 l0 -65 -320 0
                -320 0 0 65 0 65 320 0 320 0 0 -65z m140 0 l0 -65 -60 0 -60 0 0 65 0 65 60
                0 60 0 0 -65z m-950 -245 l0 -170 -55 0 -55 0 0 170 0 170 55 0 55 0 0 -170z
                m150 0 l0 -170 -65 0 -65 0 0 170 0 170 65 0 65 0 0 -170z m660 0 l0 -170
                -320 0 -320 0 0 170 0 170 320 0 320 0 0 -170z m130 0 l0 -170 -55 0 -55 0 0
                170 0 170 55 0 55 0 0 -170z m-940 -250 l0 -60 -60 0 -60 0 0 60 0 60 60 0 60
                0 0 -60z m150 0 l0 -60 -65 0 -65 0 0 60 0 60 65 0 65 0 0 -60z m660 0 l0 -60
                -320 0 -320 0 0 60 0 60 320 0 320 0 0 -60z m130 0 l0 -60 -55 0 -55 0 0 60 0
                60 55 0 55 0 0 -60z m20 -565 l0 -625 -65 0 -65 0 0 555 0 555 60 0 60 0 0 70
                c0 39 2 70 5 70 3 0 5 -281 5 -625z m-810 -105 l0 -590 -240 0 -240 0 0 25 0
                25 175 0 175 0 0 565 0 565 65 0 65 0 0 -590z"
          />
        </g>
      </svg> */}
    </div>
  )
}

export default Logo
