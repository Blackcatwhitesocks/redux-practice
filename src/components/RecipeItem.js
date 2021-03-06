import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fevoriteRecipe } from '../actions';

class RecipeItem extends Component {
    render() {
        let {recipe } = this.props;
        return ( 
            <div className="recipe-item">
                <div 
                className="star"
                onCLick={() => this.props.favoriteRecipe(recipe)}>
                    &#9734;
                </div>
                <div className="recipe-text">
                <a href={recipe.href}>
                    <h4>{recipe.title}</h4>
                </a>
                <p>{recipe.ingredients}</p>
            </div>
            <img 
                scr={recipe.thumbnail} 
                alt={recipe.title} 
                className="recipe-img"
            />
            </div>
            
           
        )
    }
}

export default connect(null, { favoriteRecipe })(RecipeItem);