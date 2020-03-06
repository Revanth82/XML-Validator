import React from 'react';
//import './upload.css';
//import axios from 'axios'


class Sample3 extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {file: '', msg: ''};
	}
	
	onFileChange = (event) => {
		this.setState({
			file: event.target.files
        });
        console.log(this.state.files)
    }
    

	
	uploadFileData = (event) => {
        event.preventDefault();
    
        this.setState({msg: ''});
    

		let data = new FormData();
		data.append('file', this.state.file);

		fetch('http://localhost:8080/upload', {
			method: 'POST',
			body: data
		}).then(response => {
			console.log("Sample2")
			this.setState({msg: "File successfully uploaded"});
		}).catch(err => {
			console.log("Sample3")
			this.setState({error: err});
		});

	}
	
	
	render() {
		return (
			<div id="container">
				<h1>File Upload Example using React</h1>
				<h3>Upload a File</h3>
				<h4>{this.state.msg}</h4>
				<input onChange={this.onFileChange} action="text/xml" type="file"></input>
				<button disabled={!this.state.file} onClick={this.uploadFileData}>Upload</button>
			</div>
		)
	}

}

export default Sample3;
