import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

var UpdateStudent = React.createClass({

	getInitialState: function() {

		return {
			updateObject: {
				id: '', 
				name: '', 
				pname: '', 
				admissionno: '', 
				dateOfBirth: '',
				dateOfJoining: '',
				tname: '' ,
				standardId: '',
				routeId:'',
				caretakerId:'',
				boardingstopId: ''
			}
		}
    },

    shouldComponentUpdate: function() {
    	//console.log('EU:shouldComponentUpdate');
    	//return this.props.parent.state.showUpdateModal;
    	return true;
    },

	render: function() {
		
		return (
			<Modal show={this.props.parent.state.showUpdateModal}>
				<Modal.Header>
					<Modal.Title>Update Student Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FormGroup>
							<ControlLabel>Student name</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter name"
								value={this.state.updateObject.name}
								onChange={this.onUpdateStudentNameChange} />
							<br />
							
							<ControlLabel>Parent name</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Parent Name"
								value={this.state.updateObject.pname}
								onChange={this.onUpdateStudentPnameChange} />
							<br />
							
							<ControlLabel>Admission No</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Admissionno"
								value={this.state.updateObject.admissionno}
								onChange={this.onUpdateStudentAdmissionnoChange} />
							<br />
                            
							<ControlLabel>Date Of Birth</ControlLabel>
							<FormControl
								type="date"
								placeholder="Enter Date Of Birth"
								value={this.state.updateObject.dateOfBirth}
								onChange={this.onUpdateStudentDateofBirthChange} />
							<br />
                            <ControlLabel>Date Of Join</ControlLabel>
							<FormControl
								type="date"
								placeholder="Enter Date Of Join"
								value={this.state.updateObject.dateOfJoining}
								onChange={this.onUpdateStudentDateofJoinChange} />
							<br />

							

							<ControlLabel>Teacher Name</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter Teacher Name"
								value={this.state.updateObject.tname}
								onChange={this.onUpdateStudentTnameChange} />
							<br />
                           
							<ControlLabel>Student Class</ControlLabel>
							<Select
								name="standardsField"
								value={this.state.updateObject.standardId}
								options={this.props.parent.getStandardOptions()}
								onChange={this.onUpdateStudentStandardChange} />

								<ControlLabel>Route</ControlLabel>
							<Select
								name="routesField"
								value={this.state.updateObject.routeId}
								options={this.props.parent.getRouteOptions()}
								onChange={this.onUpdateStudentRouteChange} />

								<ControlLabel>Caretaker</ControlLabel>
							<Select
								name="caretakersField"
								value={this.state.updateObject.caretakerId}
								options={this.props.parent.getCaretakerOptions()}
								onChange={this.onUpdateStudentCaretakerChange} />

								<ControlLabel>Boarding Stop</ControlLabel>
							<Select
								name="boardingstopsField"
								value={this.state.updateObject.boardingstopId}
								options={this.props.parent.getBoardingstopOptions()}
								onChange={this.onUpdateStudentBoardingstopChange} />

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

    	var selectedStudent = this.props.parent.getStudentById(this.props.parent.state.selectedStudentId);

		this.state.updateObject = {
			id: selectedStudent.id, 
			name: selectedStudent.name, 
			pname: selectedStudent.pname, 
			admissionno: selectedStudent.admissionno, 
			dateOfBirth: selectedStudent.dateOfBirth,
			dateOfJoining: selectedStudent.dateOfJoining,
			tname: selectedStudent.tname,
			standardId: selectedStudent.standardId,
			routeId: selectedStudent.routeId,
			boardingstopId: selectedStudent.boardingstopId,
			caretakerId: selectedStudent.caretakerId
		}
	},

	clearUpdateObject: function() {

		this.state.updateObject.id = '';
		this.state.updateObject.name = '';
		this.state.updateObject.pname = '';
		this.state.updateObject.admissionno = '';
		this.state.updateObject.dateOfBirth = '';
		this.state.updateObject.dateOfJoining = '';
		this.state.updateObject.tname = '';
		this.state.updateObject.standardId = '';
		this.state.updateObject.routeId = '';
		this.state.updateObject.caretakerId = '';
		this.state.updateObject.boardingstopId = '';
	},

	//Input changes
	onUpdateStudentNameChange: function(event) {
		this.state.updateObject.name = event.target.value;
		this.forceUpdate();
	},

	onUpdateStudentPnameChange: function(event) {
		this.state.updateObject.pname = event.target.value;
		this.forceUpdate();
	},

	onUpdateStudentAdmissionnoChange: function(event) {
		this.state.updateObject.admissionno = event.target.value;
		this.forceUpdate();		
	},

	onUpdateStudentDateofBirthChange: function(event){
	this.state.updateObject.dateOfBirth = event.target.value;
	this.forceUpdate();
	},

	onUpdateStudentDateofJoinChange: function(event){
		this.state.updateObject.dateOfJoining = event.target.value;
		this.forceUpdate();
	},


	onUpdateStudentTnameChange: function(event) {
		this.state.updateObject.tname = event.target.value;
		this.forceUpdate();		
	},

	onUpdateStudentStandardChange: function(selection) {
		
				if(selection === null) {
					this.state.updateObject.standardId = null;
				}else {
					this.state.updateObject.standardId = selection.value;
				}
				
				this.forceUpdate();		
			},

			onUpdateStudentRouteChange: function(selection) {
				
						if(selection === null) {
							this.state.updateObject.routeId = null;
						}else {
							this.state.updateObject.routeId = selection.value;
						}
						
						this.forceUpdate();		
					},

					onUpdateStudentCaretakerChange: function(selection) {
						
								if(selection === null) {
									this.state.updateObject.caretakerId = null;
								}else {
									this.state.updateObject.caretakerId = selection.value;
								}
								
								this.forceUpdate();		
							},

							onUpdateStudentBoardingstopChange: function(selection) {
								
										if(selection === null) {
											this.state.updateObject.boardingstopId = null;
										}else {
											this.state.updateObject.boardingstopId = selection.value;
										}
										
										this.forceUpdate();		
									},
			
	onUpdateBtnClicked: function() {
		
		//Update employee
		axios.put('http://172.16.1.129:8080/students/' + this.state.updateObject.id, this.state.updateObject)
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

export default UpdateStudent;