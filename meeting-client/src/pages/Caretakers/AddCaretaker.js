import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

var AddCaretaker = React.createClass({

	getInitialState: function() {

		return {
			addObject: {
				id: '', 
				name: ''
			}
		}
    },

	render: function() {

		return (
			<Modal show={this.props.parent.state.showAddModal}>
				<Modal.Header>
					<Modal.Title>Add Caretaker</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FormGroup>
							<ControlLabel>Caretaker Name</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Caretaker"
								value={this.state.addObject.name}
								onChange={this.onAddCaretakerNameChange} />
							<br />
						</FormGroup>
					</form>						
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.parent.closeAddModal}>Close</Button>
					<Button bsStyle="primary" onClick={this.onAddBtnClicked}>Add</Button>						
				</Modal.Footer>				
			</Modal>
		);
	},

	clearAddObject: function() {

		this.state.addObject.id = '';
		this.state.addObject.name = '';
	},

	//Input changes
	onAddCaretakerNameChange: function(event) {
		this.state.addObject.name = event.target.value;
		this.forceUpdate();
	},

	onAddBtnClicked: function() {

		//Save department
		axios.post('http://172.16.1.129:8080/caretakers/', this.state.addObject)
			.then(function (response) {
				this.props.parent.closeAddModal();
				this.props.parent.refreshTable();
				console.log(response);
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
	}
});

export default AddCaretaker;