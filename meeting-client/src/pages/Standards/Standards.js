import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import { ButtonGroup, Button, Modal, Glyphicon, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import AddStandardModal from './AddStandard';
import UpdateStandardModal from './UpdateStandard';

var Standards = React.createClass({

	getInitialState: function() {

		return {
			data: null,
			selectedStandardId: null,
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
					<Button bsStyle="warning" disabled={this.state.selectedStandardId === null} onClick={this.openUpdateModal}><Glyphicon glyph="refresh" />Update</Button>
					<Button bsStyle="danger" disabled={this.state.selectedStandardId === null} onClick={this.onDeleteBtnClicked}><Glyphicon glyph="trash" />Delete</Button>
				</ButtonGroup>
			
				<BootstrapTable data={this.state.data} 
								striped={true} 
								hover={true} 
								pagination={true} 
								search={true} 
								selectRow={selectRowProp}>
					<TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Class ID</TableHeaderColumn>
					<TableHeaderColumn dataField="name" dataSort={true}>Class Name</TableHeaderColumn>
				</BootstrapTable>
							
				<AddStandardModal parent={this} ref="addStandard" />

				<UpdateStandardModal parent={this} ref="updateStandard"/>
			</div>		
		);
	},
	
	// Keep selected row
	onRowSelect: function(row, isSelected) {

		if(isSelected) {
			this.setState({ selectedStandardId: row.id });
		}else {
			this.setState({ selectedStandardId: null });
		}
	},
	
	//Add modal open/close
	closeAddModal: function() {
		this.setState({ showAddModal: false });
		this.refs.addStandard.clearAddObject();
	},

	openAddModal: function() {
		this.refs.addStandard.clearAddObject();		
		this.setState({ showAddModal: true });
	},

	//Update modal open/close
	closeUpdateModal: function() {
		this.setState({showUpdateModal: false});
		this.refs.updateStandard.clearUpdateObject();
	},
	
	openUpdateModal: function() {
		this.refs.updateStandard.fillUpdateObject();
		this.setState({showUpdateModal: true});
	},

	//BEGIN: Delete Standard
	onDeleteBtnClicked: function() {
		
		axios.delete('http://172.16.1.129:8080/standards/' + this.state.selectedStandardId)
			.then(function (response) {
				this.refreshTable();
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});		
	},
	//END: Delete Standard
	
	getStandardById: function(id) {

		for(var i in this.state.data) {
			if(this.state.data[i].id === id) {
				return this.state.data[i];
			}
		}
		return '';
	},

	//Get table data and update the state to render
	refreshTable: function() {
		
		axios.get('http://172.16.1.129:8080/standards')
		.then(function (standards) {
			this.setState({data: standards.data});
		}.bind(this));
	}
});

export default Standards;