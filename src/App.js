import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import  RecipeTile from './RecipeTile.js';


function App() {

  const [query, setquery] = useState("")
  const [recipes, setrecipes] = useState([])

  const YOUR_APP_ID = "7b8bae75";
  const YOUR_APP_KEY = "16a6966318f0b378478c84cffe3cf781";

  var url= `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;
  
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  
  return (
    <div className="app">
       <h1>Food Reecipe plaza </h1>
       <form className='app_searchForm' onSubmit={onSubmit}>
         <input type="text" className='app_input' placeholder='enter ingridient' value={query} onChange={(e) => setquery(e.target.value)}/>
         <input  className='app_submit' type="submit" value="Search" />
       </form>

       <div className='app_recipes'>
         {recipes.map(recipe => {
           return <RecipeTile recipe={recipe}/>;
         })}
       </div>

    </div>
  );
}

export default App;
