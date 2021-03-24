import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios' 
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(()=>{

    const fetchItems = async ()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(result.data);
      // set this data to the state
      setItems(result.data)
      setIsLoading(false)

    }
  
    fetchItems()

  },[])
  return (
    <div className="container">
      <Header></Header>
      <Search></Search>
      <CharacterGrid isLoading={isLoading} items={items}></CharacterGrid>
    </div>
  );
}

export default App;
