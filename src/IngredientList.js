import React, { Component } from 'react';

class IngredientList extends Component {

	displayIngredients() {
		let resultArray = [];
		this.props.recepie.ingredients.map((item,i)=>{
			resultArray.push(<li key={i}>{item.quantity} - {item.ingredient}</li>);
		});
		return resultArray;
	}

	render() {
		return (
			<ul>
			{this.displayIngredients()}
			</ul>
		);
	}
}

export default IngredientList;