import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_tjdod6q',
        'template_iywxeo9',
        refForm.current,
        '4cy2UofaZQt_PMMvl'
      )
      .then(
        () => {
          alert('Message successfully sent!!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I am interested in fulltime/freelance opportunities - especially
            ambitious or large projects. However, if you have other request or
            question, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form
              action=""
              autoComplete="off"
              ref={refForm}
              onSubmit={sendEmail}
            >
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Harsh Anand,
          <br />
          Hyderabad
          <br />
          India,
          <br />
          <span>harshanand119@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[17.458564879900074, 78.37053311475141]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[17.458564879900074, 78.37053311475141]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
