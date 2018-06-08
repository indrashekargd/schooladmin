import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


var AddStudent = React.createClass({
	

	getInitialState: function() {

		return {
			addObject: {
				id: '', 
				name: '', 
				pname: '', 
				admissionno: '', 
				tname: '',
				dateOfBirth: '',
				dateOfJoining:'',
				standardId: '',
				routeId:'',
				boardingstopId: '',
				caretakerId:''
			}
		}
    },

	render: function() {

		return (
			<Modal show={this.props.parent.state.showAddModal}>
				<Modal.Header>
					<Modal.Title>Register Student Detail</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FormGroup>
							<ControlLabel>Student name</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Student Name"
								value={this.state.addObject.name}
								onChange={this.onAddStudentNameChange} />
							<br />
							
							<ControlLabel>Parent Name</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Parent Name"
								value={this.state.addObject.pname}
								onChange={this.onAddStudentPnameChange} />
							<br />
							
							<ControlLabel>Admission No</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Admission No"
								value={this.state.addObject.admissionno}
								onChange={this.onAddStudentAdmissionnoChange} />
							<br />
							
                            <ControlLabel>Date Of Birth</ControlLabel>
							<FormControl
								type="date"
								placeholder="Enter Date Of Birth"
								value={this.state.addObject.dateOfBirth}
								onChange={this.onAddStudentDateofBirthChange} />
							<br />

							<ControlLabel>Date Of Join</ControlLabel>
							<FormControl
								type="date"
								placeholder="Enter Date Of Joining"
								value={this.state.addObject.dateOfJoining}
								onChange={this.onAddStudentDateofJoinChange} />
							<br />

                            <ControlLabel>Teacher Name</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Teacher Name"
								value={this.state.addObject.tname}
								onChange={this.onAddStudentTnameChange} />
							<br />
							<ControlLabel>Student Class</ControlLabel>
							<Select
								name="standardsField"
								value={this.state.addObject.standardId}
								options={this.props.parent.getStandardOptions()}
								onChange={this.onAddStudentStandardChange} />
								<ControlLabel>Route</ControlLabel>
							<Select
								name="routesField"
								value={this.state.addObject.routeId}
								options={this.props.parent.getRouteOptions()}
								onChange={this.onAddStudentRouteChange} />
								<ControlLabel>Caretaker</ControlLabel>
							<Select
								name="caretakersField"
								value={this.state.addObject.caretakerId}
								options={this.props.parent.getCaretakerOptions()}
								onChange={this.onAddStudentCaretakerChange} />
								<ControlLabel>Boarding Stop</ControlLabel>
							<Select
								name="boardingstopsField"
								value={this.state.addObject.boardingstopId}
								options={this.props.parent.getBoardingstopOptions()}
								onChange={this.onAddStudentBoardingstopChange} />
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
		this.state.addObject.pname = '';
		this.state.addObject.admissionno = '';
		this.state.addObject.dateOfBirth = '';
		this.state.addObject.dateOfJoining = '';
		this.state.addObject.tname = '';
		this.state.addObject.standardId = '';
		this.state.addObject.routeId = '';
		this.state.addObject.caretakerId = '';
		this.state.addObject.boardingstopId = '';
 	},

	//Input changes
	onAddStudentNameChange: function(event) {
		this.state.addObject.name = event.target.value;
		this.forceUpdate();
	},

	onAddStudentPnameChange: function(event) {
		this.state.addObject.pname = event.target.value;
		this.forceUpdate();
	},

	onAddStudentAdmissionnoChange: function(event) {
		this.state.addObject.admissionno = event.target.value;
		this.forceUpdate();
	},

	onAddStudentDateofBirthChange: function(event){
	   this.state.addObject.dateOfBirth = event.target.value;
	   this.forceUpdate();
	},

	onAddStudentDateofJoinChange: function(event){
		this.state.addObject.dateOfJoining = event.target.value;
		this.forceUpdate();
	},

	onAddStudentTnameChange: function(event) {
		this.state.addObject.tname = event.target.value;
		this.forceUpdate();
	},

	onAddStudentStandardChange: function(selection) {
		
				if(selection === null) {
					this.state.addObject.standardId = null;
				}else {		
					this.state.addObject.standardId = selection.value;
				}
		
				this.forceUpdate();
			},

			onAddStudentRouteChange: function(selection) {
				
						if(selection === null) {
							this.state.addObject.routeId = null;
						}else {		
							this.state.addObject.routeId = selection.value;
						}
				
						this.forceUpdate();
					},

					onAddStudentCaretakerChange: function(selection) {
						
								if(selection === null) {
									this.state.addObject.caretakerId = null;
								}else {		
									this.state.addObject.caretakerId = selection.value;
								}
						
								this.forceUpdate();
							},

							onAddStudentBoardingstopChange: function(selection) {
								
										if(selection === null) {
											this.state.addObject.boardingstopId = null;
										}else {		
											this.state.addObject.boardingstopId = selection.value;
										}
								
										this.forceUpdate();
									},
	
	onAddBtnClicked: function() {

		//Save employee
		axios.post('http://172.16.1.129:8080/students/', this.state.addObject)
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

export default AddStudent;