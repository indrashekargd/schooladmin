import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

var UpdateBoardingstop = React.createClass({

	getInitialState: function() {
		return {
			updateObject: {
				id: '', 
				name: ''
			}
		}
    },

	render: function() {

		return (
			<Modal show={this.props.parent.state.showUpdateModal}>
				<Modal.Header>
					<Modal.Title>Update Boardingstop</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FormGroup>
							<ControlLabel>Boardingstop</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Stop Name"
								value={this.state.updateObject.name}
								onChange={this.onUpdateBoardingstopNameChange} />
							<br />
						</FormGroup>
					</form>						
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.parent.closeUpdateModal}>Close</Button>
					<Button bsStyle="primary" onClick={this.onUpdateBtnClicked}>Update</Button>						
				</Modal.Footer>
			</Modal>
		);
	},

	fillUpdateObject: function() {
    	var selectedBoardingstop = this.props.parent.getBoardingstopById(this.props.parent.state.selectedBoardingstopId);

		this.state.updateObject = {
			id: selectedBoardingstop.id, 
			name: selectedBoardingstop.name
		}
	},
	clearUpdateObject: function() {
		this.state.updateObject.id = '';
		this.state.updateObject.name = '';
	},

	//Input changes
	onUpdateBoardingstopNameChange: function(event) {
		this.state.updateObject.name = event.target.value;
		this.forceUpdate();
	},	
	onUpdateBtnClicked: function() {
		
		//Update Department
		axios.put('http://172.16.1.129:8080/boardingstops/' + this.state.updateObject.id, this.state.updateObject)
			.then(function (response) {
				this.props.parent.closeUpdateModal();
				this.props.parent.refreshTable();
				console.log(response);
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
	}
});

export default UpdateBoardingstop;