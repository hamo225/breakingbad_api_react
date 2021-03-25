import {useState} from 'react'


const Search = ({getQuery}) => {

    // add state for input form
    const [text, setText] = useState([])
    

    const onChange = (q)=>{
        setText(q)
        getQuery(q)
    }

    return (
        
        <section className='search'>
            <form action="">
                <input 
                type="text" 
                className='form-control'
                value={text}
                onChange={(e)=> onChange(e.target.value)} //everytime I write something into the input an onohange event will fire
                // and will take the input value and put it into the state
                placeholder='Search Characters'/>
            </form>
        </section>
    )
}

export default Search
