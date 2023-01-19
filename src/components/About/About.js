import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'

const About = () => {
  const aboutArray = 'About me'.split('')
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters strArray={aboutArray} idx={15} />
        </h1>
        <p>
          I am a 4th Year Undergrad at Kiit University pursuing a Bachelor of
          Technology majoring in Computer Science and Engineering and currently
          an SDE Intern at Devathon.
        </p>
      </div>
    </div>
  )
}

export default About
