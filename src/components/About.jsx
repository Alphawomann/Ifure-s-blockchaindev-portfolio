import ifure from '../assets/alpha.jpg'

function About() {

    return (
      <div id="about"> 
  <h2>About</h2>
<div className="about-container"> 
  <div className="bio">
<h3>Who am I?</h3>
<p>I am a solution driven blockchain developer steered by passion for decentralisation because I believe that decentralisation of money and resources is a revolutionary way to enable humans gain complete control of their money, data and other valuable resources. I strongly believe that blockchain can change the way the world sees money and handles people's data/privacy.</p>
<p>I am well versed with creating smart contracts using solidity and integrating it to the frontend with Web3.js and React.js.</p> 
<p>I am a constant learner who loves to stay up to date with innovations in blockchain and technology in general.</p> 
<p>When I am not writing vulnerability free smart contracts, I write simplified articles to help even 5-year olds understand blockchain technology and how revolutionary it is.</p>
 <p> I love me some memes too. I also love to network with meme lords just because they make life's burden lighter. </p>  
  </div>
  <div className="profile-image"> 
    <img src={ifure} alt=""/>   

  </div> 
</div>




      </div>
    )
  }
  
  export default About
  