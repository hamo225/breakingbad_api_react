import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items, isLoading}) => {
    // check see if its still loading or not. 
    return isLoading ? <h1>Loading...</h1>: <section className="cards">
{items.map(item =>(
<CharacterItem key={item.char_id} item={item}></CharacterItem>
))}
</section>
    
}

export default CharacterGrid
