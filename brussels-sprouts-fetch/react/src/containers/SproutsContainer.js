import React, { Component } from 'react';
import RandomSprout from '../components/RandomSprout';
import SproutsIndex from '../components/SproutsIndex';
import LongestRecipe from '../components/LongestRecipe';

class SproutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
      recipes: [],
      longestRecipe: ''
    }

    this.getRandomRecipe = this.getRandomRecipe.bind(this)
    this.getAllRecipes = this.getAllRecipes.bind(this)
    this.getLongestRecipe = this.getLongestRecipe.bind(this)

  }

  getRandomRecipe(){
    // YOUR FETCH CALL HERE
    fetch('http://localhost:4567/api/v1/random-recipe')
      .then(response => response.json())
      .then(body => {
        let randomRecipe = body;
        this.setState({ recipe: randomRecipe, recipes: [], longestRecipe: '' });
      })

  }

  getAllRecipes(){
    // YOUR FETCH CALL HERE
    fetch('http://localhost:4567/api/v1/recipes')
      .then(response => response.json())
      .then(body => {
        let allRecipes = body;
        this.setState({ recipes: allRecipes, recipe: '', longestRecipe: '' });
      })
  }

  getLongestRecipe(){
    fetch('http://localhost:4567/api/v1/longest-recipe')
      .then(response => response.json())
      .then(body => {
        let longestRecipes = body;
        this.setState({ longestRecipe: longestRecipes, recipe: '', recipes: [] });
      })
  }

  render(){

    let handleRandomClick = () => {
      this.getRandomRecipe();
    }

    let handleIndexClick = () => {
      this.getAllRecipes();
    }

    let handleLongestClick = () => {
      this.getLongestRecipe();
    }

    return(
      <div className="container">
        <h1>Sprout Fetcher</h1>
        <RandomSprout
          recipe={this.state.recipe}
          handleClick = {handleRandomClick}
        />
        <SproutsIndex
          recipes={this.state.recipes}
          handleClick={handleIndexClick}
        />
        <LongestRecipe
          longestRecipe={this.state.longestRecipe}
          handleClick={handleLongestClick}
        />
        <div className="buttons">
          <button onClick={handleRandomClick} className="btn">Get Random Recipe</button>

          <button onClick={handleIndexClick} className="btn">See All Recipes</button>

          <button onClick={handleLongestClick} className="btn">See Longest Recipes</button>
        </div>
      </div>
    )
  }
}

export default SproutsContainer;
