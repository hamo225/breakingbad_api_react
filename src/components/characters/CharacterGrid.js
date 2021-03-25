import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({items, isLoading}) => {
    // check see if its still loading or not. 
    return isLoading ? <Spinner></Spinner>: <section className="cards">
{items.map(item =>(
<CharacterItem key={item.char_id} item={item}></CharacterItem>
))}
</section>
    
}

export default CharacterGrid
