import React, { Component } from 'react';

class Ingredients extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			newRecepie:{
				name:"NEw Recepie",
				description:"Description",
				ingredients:[]
			}
		};
		this.addIngredients = this.addIngredients.bind(this);
	}
	addIngredients() {
		console.log("Clicked");
			console.log(this.quantity.value);
			console.log(this.ingredient.value);
			this.props.addIngredient(this.quantity.value, this.ingredient.value);
			this.quantity.value="";
			this.ingredient.value="";
	}
	render() {
		return (
			<div className="form-group form-inline">
			    <label htmlFor="quantity">Quantity</label>
			    <input type="text"			    		
			    		className="form-control" 
			    		ref={(input) => {this.quantity=input;}} 
			    		id="quantity" 
			    		placeholder="Quantity" />
			    <label htmlFor="ingredient">Ingredient</label>
			    <input  ref={(input) => {this.ingredient=input;}} 
			    		type="text" 
			    		className="form-control" 
			    		id="ingredient" 
			    		placeholder="ingredient" />
			    <button type="button" onClick={this.addIngredients} className="btn btn-info">Add</button>		
			    
			  </div>
		);
	}
}

export default Ingredients;