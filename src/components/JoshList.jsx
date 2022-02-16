import React from 'react'
import CollectionCard from './CollectionCard'
import './JoshList.css'

const JoshList = ({joshListData}) => {
  return (
    <div className='joshList' >
        {joshListData.map(josh=>{
            return (
                <div className='joshList'>
                    <CollectionCard 
                        key={josh.token_id}
                        id={josh.token_id}
                        name={josh.name}
                        traits={josh.traits}
                        image={josh.image_url}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default JoshList