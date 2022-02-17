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

              <div className="joshDetails">
                <div className="title">
                    {activeJosh.name}
                    <span className='itemNumber'>
                        .#{activeJosh.token_id}
                    </span>
                </div>
                <div className="owner">
                    <div className="ownerImage">
                        <img src={activeJosh.owner.profile_image_url}
                        alt={activeJosh.name} />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>0x866aAe9434CddA2424C284CC76299371eA8778f8</div>
                            <div className="ownerHandle">
                                @nova_jy
                            </div>
                        </div>
                        <div className="ownerLink">
                            <img src={instagramLogo}
                            alt="" />
                        </div>
                        <div className="ownerLink">
                            <img src={twitterLogo}
                            alt="" />
                        </div>
                        <div className="ownerLogo">
                            <img src={moreIcon}
                            alt="" />
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Main