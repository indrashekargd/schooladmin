import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import { ButtonGroup, Button, Modal, Glyphicon, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import AddStudentModal from './AddStudent';
import UpdateStudentModal from './UpdateStudent';

var Students = React.createClass({

	getInitialState: function() {
		
		return {
			data: null,
			standards: null,
			routes: null,
			selectedStudentId: null,
			selectdRouteId: null,
			selectedCaretakerId: null,
			selectedBoardingstopId: null,
			showAddModal: false,
			showUpdateModal: false
		}
    },
	
	componentDidMount: function() {
		this.refreshTable();
	},
	
	render: function() {

		var selectRowProp = {
			mode: "radio",
			clickToSelect: true,
			className: "selected-row",
			bgColor: 'rgb(101, 148, 255)',			
			onSelect: this.onRowSelect
		};		
		
		if(!this.state.data){
			return (<div></div>);
		}
		
		return (
			<div>
				<ButtonGroup className="m-10">
					<Button bsStyle="primary" onClick={this.openAddModal}><Glyphicon glyph="plus" />Add</Button>
					<Button bsStyle="warning" disabled={this.state.selectedStudentId === null} onClick={this.openUpdateModal}><Glyphicon glyph="refresh" />Update</Button>
					<Button bsStyle="danger" disabled={this.state.selectedStudentId === null} onClick={this.onDeleteBtnClicked}><Glyphicon glyph="trash" />Delete</Button>
				</ButtonGroup>
			
				<BootstrapTable data={this.state.data} 
								striped={true} 
								hover={true} 
								pagination={true} 
								search={true} 
								selectRow={selectRowProp}>
					<TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true} hidden="true">Student ID</TableHeaderColumn>
					<TableHeaderColumn dataField="name" dataSort={true}>Student Name</TableHeaderColumn>
					<TableHeaderColumn dataField="pname" dataSort={true}>Parent Name</TableHeaderColumn>
					<TableHeaderColumn dataField="admissionno" dataSort={true}>Admission No</TableHeaderColumn>
					<TableHeaderColumn dataField="dateOfBirth">Date Of Birth</TableHeaderColumn>
					<TableHeaderColumn dataField="dateOfJoining">Date Of Join</TableHeaderColumn>
					<TableHeaderColumn dataField="tname">Class Teacher</TableHeaderColumn>
					<TableHeaderColumn dataField="standardId" dataFormat={this.standardFormatter} dataSort={true}>Class</TableHeaderColumn>
					<TableHeaderColumn dataField="routeId" dataFormat={this.routeFormatter}>Route</TableHeaderColumn>
					<TableHeaderColumn dataField="boardingstopId" dataFormat={this.boardingstopFormatter}>Boarding Stop</TableHeaderColumn>
					<TableHeaderColumn dataField="caretakerId" dataFormat={this.caretakerFormatter}>Caretaker</TableHeaderColumn>
					
				</BootstrapTable>
							
				<AddStudentModal parent={this} ref="addStudent" />

				<UpdateStudentModal parent={this} ref="updateStudent"/>
			</div>		
		);
	},
	
	// Keep selected row
	onRowSelect: function(row, isSelected) {
		if(isSelected) {
			this.setState({ selectedStudentId: row.id });
		}else {
			this.setState({ selectedStudentId: null });
		}
	},
	
	//Standard list for Select component
	getStandardOptions: function(){
	 
		var options = [];
		
				options = this.state.standards.map(function(obj){ 
					var rObj = {};
					rObj['value'] = obj['id'];
					rObj['label'] = obj['name'];
					return rObj;
				});
		
				return options;	
	
	},

	//Route list for Select component
	getRouteOptions: function(){
		
		   var options = [];
		   
				   options = this.state.routes.map(function(obj){ 
					   var rObj = {};
					   rObj['value'] = obj['id'];
					   rObj['label'] = obj['name'];
					   return rObj;
				   });
		   
				   return options;	
	   
	   },

  //Boarding stop list for Select component
	getBoardingstopOptions: function(){
		
		   var options = [];
		   
				   options = this.state.boardingstops.map(function(obj){ 
					   var rObj = {};
					   rObj['value'] = obj['id'];
					   rObj['label'] = obj['name'];
					   return rObj;
				   });
		   
				   return options;	
	   
	   },

	//Caretaker list for Select component
	getCaretakerOptions: function(){
		
		   var options = [];
		   
				   options = this.state.caretakers.map(function(obj){ 
					   var rObj = {};
					   rObj['value'] = obj['id'];
					   rObj['label'] = obj['name'];
					   return rObj;
				   });
		   
				   return options;	
	   
	   },
	
	//Add modal open/close
	closeAddModal: function() {
		this.setState({ showAddModal: false });
		this.refs.addStudent.clearAddObject();
	},
	openAddModal: function() {
		this.refs.addStudent.clearAddObject();		
		this.setState({ showAddModal: true });
	},

	//Update modal open/close
	closeUpdateModal: function() {
		this.setState({showUpdateModal: false});
		this.refs.updateStudent.clearUpdateObject();
	},
	openUpdateModal: function() {
		this.refs.updateStudent.fillUpdateObject();
		this.setState({showUpdateModal: true});
	},

	//BEGIN: Delete Student
	onDeleteBtnClicked: function() {
		
		axios.delete('http://172.16.1.129:8080/students/' + this.state.selectedStudentId)
			.then(function (response) {
				this.refreshTable();
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});		
	},
	//END: Delete Student


    standardFormatter: function(cell, row) {
		return this.getStandardName(row.standardId);
	},

	routeFormatter: function(cell, row) {
		return this.getRouteName(row.routeId);
	},

	boardingstopFormatter: function(cell, row) {
		return this.getBoardingstopName(row.boardingstopId);
	},

	caretakerFormatter: function(cell, row) {
		return this.getCaretakerName(row.caretakerId);
	},

	getStandardName: function(standardId) {
		
				for(var i in this.state.standards) {
					if(this.state.standards[i].id === standardId) {
						return this.state.standards[i].name;
					}
				}
				return '';
			},

	getRouteName: function(routeId) {
				
	for(var i in this.state.routes) {
	if(this.state.routes[i].id === routeId) {
	return this.state.routes[i].name;
			}
			}
				return '';
		},

		getBoardingstopName: function(boardingstopId) {
			
for(var i in this.state.boardingstops) {
if(this.state.boardingstops[i].id === boardingstopId) {
return this.state.boardingstops[i].name;
		}
		}
			return '';
	},

	getCaretakerName: function(caretakerId) {
		
for(var i in this.state.caretakers) {
if(this.state.caretakers[i].id === caretakerId) {
return this.state.caretakers[i].name;
	}
	}
		return '';
},

	getStudentById: function(id) {
		for(var i in this.state.data) {
			if(this.state.data[i].id === id) {
				return this.state.data[i];
			}
		}
		return '';
	},

	getStudents: function() {
	  return axios.get('http://172.16.1.129:8080/students');
	},

	getStandards: function() {
	  return axios.get('http://172.16.1.129:8080/standards');
	}, 

	getRoutes: function() {
		return axios.get('http://172.16.1.129:8080/routes');
	  }, 

	  getBoardingstops: function() {
		return axios.get('http://172.16.1.129:8080/boardingstops');
	  }, 

	  getCaretakers: function() {
		return axios.get('http://172.16.1.129:8080/caretakers');
	  }, 
	
	//Get table data and update the state to render
	refreshTable: function() {
		
		axios.all([this.getStudents(),this.getStandards(),this.getRoutes(),this.getBoardingstops(),this.getCaretakers()])
		.then(axios.spread(function (students, standards,routes,boardingstops,caretakers) {
			this.setState({data: students.data,standards: standards.data,routes: routes.data,boardingstops: boardingstops.data,caretakers: caretakers.data});
		}.bind(this)));
	}
});

export default Students;