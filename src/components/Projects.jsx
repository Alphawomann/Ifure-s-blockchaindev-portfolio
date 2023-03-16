import nft from '../assets/nftpicture.avif' 

function Projects() {

    return (
      <div id="projects">
  <h2>Projects</h2>
  <p>These are all my excellent projects. All my projects include links to the sourcecode on Github. Click the links to view them.</p>
  <div className="boxcontainer">
    <div className="box"> 
<img src={nft} alt="An NFT logo"/>
< a href="https://github.com/Alphawomann/NFT.git">Github link</a> 
    </div> 

    <div className="box"> 
<img src={nft} alt=""/>
< a href="https://github.com/Alphawomann/NFT.git">Github link</a> 
    </div> 

    <div className="box"> 
<img src={nft} alt=""/>
< a href="https://github.com/Alphawomann/NFT.git">Github link</a> 
    </div> 

  </div>  
      </div> 
    )
  }
  
  export default Projects           
  