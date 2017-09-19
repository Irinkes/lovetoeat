import React, { Component } from 'react';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'csxglbua';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/ds7zkewzh/upload';

class Submit extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			recepies:JSON.parse(localStorage.getItem('recepies')) || [],
			newRecepie:{
				name:"NEw Recepie",
				description:"Description",
				ingredients:[]
			},
			 uploadedFileCloudinaryUrl: ''
		};
		this.submitRecepie = this.submitRecepie.bind(this);
		this.onImageDrop = this.onImageDrop.bind(this);

	}

	onImageDrop(files) {
		this.setState({
	      uploadedFile: files[0]
	    });

	    this.handleImageUpload(files[0]);
	}

	  handleImageUpload(file) {
	    let upload = request.post(CLOUDINARY_UPLOAD_URL)
	                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
	                        .field('file', file);

	    upload.end((err, response) => {
	      if (err) {
	        console.error(err);
	      }

	      if (response.body.secure_url !== '') {
	        this.setState({
	          uploadedFileCloudinaryUrl: response.body.secure_url
	        });
	      }
	    });
	  }


	submitRecepie() {			
			this.props.history.push('/');

			let newRecepie = this.state.newRecepie;

			newRecepie.name = this.name.value;
			newRecepie.description = this.description.value;
			newRecepie.image = this.state.uploadedFileCloudinaryUrl;

			this.setState({newRecepie});

			let recepies = this.state.recepies;
			recepies.push(newRecepie);

			this.setState({recepies});
			localStorage.setItem('recepies', JSON.stringify(recepies));
			console.log(recepies);

			
	}

	addIngredient(quantity, ingredient) {
		console.log("Add Ingredients in Submit js", quantity, ingredient);
		let newRecepie = this.state.newRecepie;
		newRecepie.ingredients.push({quantity:quantity, ingredient:ingredient});
		this.setState({newRecepie:newRecepie});
		console.log(newRecepie);
	}

	render() {
		return (
			<div className="container">			
				<div className="row">
					<div className="col-xs-12 col-sm-12">
						<h1>Submit</h1>
						<form>
						 <Dropzone
					      multiple={false}
					      accept="image/*"
					      onDrop={this.onImageDrop}>
					      <p>Drop an image or click to select a file to upload.</p>
					    </Dropzone>
					    <div>
					        {this.state.uploadedFileCloudinaryUrl === '' ? null :
					        <div>
					          <p>{this.state.uploadedFile.name}</p>
					          <img alt={this.state.uploadedFile.name} src={this.state.uploadedFileCloudinaryUrl} />
					        </div>}
					     </div>




						  <div className="form-group">
						    <label htmlFor="exampleInputEmail1">Email address</label>
						    <input type="name" 
						    	   className="form-control" 
						   		   ref={(input) => {this.name=input;}} 
						    	   id="name" 
						    	   placeholder="Enter the name of the recepie" />
						    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						  </div>
						  <div className="form-group">
						    <label htmlFor="description">Description</label>
						    <textarea 
									ref={(input) => {this.description=input;}} 
						    		className="form-control" 
						    		id="description" 
						    		placeholder="Enter a brief description" />
						  </div>
						  <IngredientList recepie={this.state.newRecepie} />	
						  <Ingredients addIngredient={(quantity, ingredient) => {this.addIngredient(quantity, ingredient)}}/>
						   
						  <button type="button" onClick={this.submitRecepie} className="btn btn-default">Submit</button>
						  					  
						  
						</form>	
					</div>
				</div>
			</div>	
		);
	}
}

export default Submit;