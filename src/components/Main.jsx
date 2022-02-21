import React, {useState, useEffect} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ( {selectedJosh, joshListData} ) => {
    const [activeJosh, setActiveJosh] = useState(joshListData[0])

    useEffect(() => {
      setActiveJosh(joshListData[selectedJosh])
    }, [joshListData, selectedJosh])
    

  return (
        <div className="main">
            <div className="mainContent">
                <div className="joshHighlight">
                    <div className="joshContainer">
                      <img 
                        className='selectedJosh'
                        src={activeJosh.image_url}
                        alt={activeJosh.name} />
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="joshDetails">
                        <div className="title">
                            {activeJosh.name}
                        </div>
                        <span className='itemNumber'>
                            .#{activeJosh.token_id}
                        </span>
                    </div>
                    <div className="owner">
                        <div className="ownerImage">
                            <img src={activeJosh.owner.profile_img_url}
                            alt={activeJosh.name} />
                        </div>
                        <div className="ownerDetails">
                            <div className="ownerNameAndHandle">
                                <div>{activeJosh.owner.address}</div>
                                <div className="ownerHandle">
                                    <a href="https://twitter.com/Nova_JY">@nova_jy</a>
                                </div>
                            </div>
                            <div className="ownerLink">
                                <a href="https://instagram.com/josh_la_posh">
                                    <img src={instagramLogo}
                                    alt="" />
                                </a>
                            </div>
                            <div className="ownerLink">
                                <a href="https://twitter.com/Nova_JY">
                                    <img src={twitterLogo}
                                    alt="" />
                                </a>
                            </div>
                            <div className="ownerLink">
                                <a href="https://www.linkedin.com/in/jfajobi">
                                    <img src={moreIcon}
                                    alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Main