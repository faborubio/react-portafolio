import { Link } from "react-router-dom"
import LogoF from '../../assets/images/logof2.png'
import './index.scss'

const Home = () => {

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br /> I'am
        <img src={LogoF} alt="developer"/>
        Fabian
        <br />
        web developer
        </h1>
        <h2> Fullstack Developer who love to learn</h2>
        <Link to="/contact" className="flat-button">Contact me</Link>
      </div>
    </div>
  )
}


export default Home
