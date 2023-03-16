import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Linkedinlogo from './assets/linkedin-box-fill.svg'
import Twitterlogo from './assets/twitter-fill.svg'
import Githublogo from './assets/github-fill.svg'


function App() {

  return (
    <div className="App"> 
      <header>
      <h4>MyLogo</h4>
      <div className="navlinks">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>   
        <a href="#contact">Contact</a> 
      </div>
      </header>
  <main>
  <Home/>
  <About/> 
  <Projects/>
  <Contact/>
  </main>
  <footer>
<div className="socials">
  <a href="https://www.linkedin.com/in/ifure-iwuoenang" target="_blank">
  <img src={Linkedinlogo} alt=""/>
  </a> 

  <a href="https://twitter.com/alpha_womann" target="_blank">  
  <img src={Twitterlogo} alt=""/>
  </a> 

  <a href="https://github.com/Alphawomann" target="_blank">
  <img src={Githublogo} alt=""/>
  </a> 
</div>
<p>&copy; Ifure Iwuoenang</p>
  </footer>
    </div>
  )
}

export default App 
