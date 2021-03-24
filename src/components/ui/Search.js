import {useState} from 'react'


const Search = () => {

    // add state for input form
    const [searchItem, setSearcItem] = useState([])
    
    return (
        
        <section className='search'>
            <form action="">
                <input 
                type="text" 
                className='form-control'
                value={searchItem}
                onChange={(e)=>{setSearcItem(e.target.value)}}
                placeholder='Search Characters'/>
            </form>
        </section>
    )
}

export default Search
