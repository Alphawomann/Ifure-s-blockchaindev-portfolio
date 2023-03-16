import ifure from'../assets/ifuree.jpg'

function About() {

    return (
      <div id="about"> 
  <h2>About</h2>
<div className="about-container"> 
  <div className="bio">
<h3>Who am I?</h3>
<p>I am a solution driven blockchain developer who believes in decentralisation of money and resources. I strongly believe that blockchain can change the way the world handles and sees money</p>
<p>I am well versed with creating smart contracts using solidity and integrating it to the frontend with Web3.js and React.js. I love memes too.</p>
  </div>
  <div className="profile-image"> 
    <img src={ifure} alt=""/>   

  </div> 
</div>




      </div>
    )
  }
  
  export default About
  