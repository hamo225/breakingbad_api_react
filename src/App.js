import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios' 
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(()=>{

    const fetchItems = async ()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data);
      // set this data to the state
      setItems(result.data)
      setIsLoading(false)

    }
  
    fetchItems()

  },[query])
  return (
    <div className="container">
      <Header></Header>
      <Search  getQuery={(q)=> setQuery(q)}></Search>
      <CharacterGrid isLoading={isLoading} items={items}></CharacterGrid>
    </div>
  );
}

export default App;
