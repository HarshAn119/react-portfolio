import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/Harsh/H_logo-removebg-1.png'
import './Home.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br />
          I'm
          <img src={LogoTitle} alt="developer" />
          arsh,
          <br />
          web developer.
        </h1>
        <h2>Frontend Developer | JavaScript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT NAME
        </Link>
      </div>
    </div>
  )
}

export default Home
