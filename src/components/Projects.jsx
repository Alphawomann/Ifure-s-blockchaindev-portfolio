import nft from '../assets/nftpicture.avif'
import ERC20 from '../assets/NewERC.jpg'
import crowd from '../assets/crowd.jpg'

function Projects() {

    return (
      <div id="projects">
  <h2>Projects</h2>
  <p className="intro">My curiosity about the blockchain technology led me to invest time and resources to gain adept knowledge and practice on blockchain projects. These are some of  my excellent projects with links to the sourcecode on Github. Click the links to view them.</p>
  <div className="boxcontainer"> 
    <div className="box"> 
<img src={nft} alt="An NFT logo"/>
< a href="https://github.com/Alphawomann/NFT.git">Github link</a> 
    </div> 

    <div className="box"> 
<img src={ERC20} alt="An ERC20 picture"/>
< a href="https://github.com/Alphawomann/ERC20-">Github link</a> 
    </div> 

    <div className="box"> 
<img src={crowd} alt="This is a crowdfunding image"/>
< a href="https://github.com/Alphawomann/crowdfunding-">Github link</a> 
    </div> 

  </div>  
      </div> 
    )
  }
  
  export default Projects           
  