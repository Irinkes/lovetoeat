import React, { Component } from 'react';
import IngredientList from './IngredientList';

class Home extends Component {
	constructor(props) {
		super(props);
		
		this.state={
			recepies:JSON.parse(localStorage.getItem('recepies')) || []
		}
	}

	displayRecepies() {
		let resultsArray=[];
		this.state.recepies.map((item,i) => (
			resultsArray.push(
				<div className="col-sm-6 col-md-4">
					<div className="thumbnail">
						<img src={item.image} alt={item.name} />
						<div className="caption">
					        <h3>{item.name}</h3>
					        <p>{item.description}</p>
					        <IngredientList recepie={item}/>
					      </div>
						</div>					
				</div>
			)
		));

		return resultsArray;
	}

	render() {
		return (
			<div className="container">
			
				<h1>Home</h1>
				<div className="row">
				{this.displayRecepies()}
				</div>
			</div>	
		);
	}
}

export default Home;