import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

var UpdateStandard = React.createClass({

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
					<Modal.Title>Update Standard</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FormGroup>
							<ControlLabel>Class</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Standard"
								value={this.state.updateObject.name}
								onChange={this.onUpdateStandardNameChange} />
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
    	var selectedStandard = this.props.parent.getStandardById(this.props.parent.state.selectedStandardId);

		this.state.updateObject = {
			id: selectedStandard.id, 
			name: selectedStandard.name
		}
	},
	clearUpdateObject: function() {
		this.state.updateObject.id = '';
		this.state.updateObject.name = '';
	},

	//Input changes
	onUpdateStandardNameChange: function(event) {
		this.state.updateObject.name = event.target.value;
		this.forceUpdate();
	},	
	onUpdateBtnClicked: function() {
		
		//Update Department
		axios.put('http://172.16.1.129:8080/standards/' + this.state.updateObject.id, this.state.updateObject)
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

export default UpdateStandard;