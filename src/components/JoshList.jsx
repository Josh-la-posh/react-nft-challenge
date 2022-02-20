import React from 'react'
import CollectionCard from './CollectionCard'
import './JoshList.css'

const JoshList = ({joshListData, setSelectedJosh}) => {
  return (
    <div className='joshLists' >
        {joshListData.map(josh=>{
            return (
                <div
                    className='joshList'
                    key={josh.token_id}
                    onClick={()=>
                        setSelectedJosh(josh.token_id)}>
                        <CollectionCard 
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