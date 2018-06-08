import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import { ButtonGroup, Button, Modal, Glyphicon, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import AddBoardingstopModal from './AddBoardingstop';
import UpdateBoardingstopModal from './UpdateBoardingstop';

var Boardingstops = React.createClass({

	getInitialState: function() {

		return {
			data: null,
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
					<Button bsStyle="warning" disabled={this.state.selectedBoardingstopId === null} onClick={this.openUpdateModal}><Glyphicon glyph="refresh" />Update</Button>
					<Button bsStyle="danger" disabled={this.state.selectedBoardingstopId === null} onClick={this.onDeleteBtnClicked}><Glyphicon glyph="trash" />Delete</Button>
				</ButtonGroup>
			
				<BootstrapTable data={this.state.data} 
								striped={true} 
								hover={true} 
								pagination={true} 
								search={true} 
								selectRow={selectRowProp}>
					<TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Stop ID</TableHeaderColumn>
					<TableHeaderColumn dataField="name" dataSort={true}>Boarding Name</TableHeaderColumn>
				</BootstrapTable>
							
				<AddBoardingstopModal parent={this} ref="addBoardingstop" />

				<UpdateBoardingstopModal parent={this} ref="updateBoardingstop"/>
			</div>		
		);
	},
	
	// Keep selected row
	onRowSelect: function(row, isSelected) {

		if(isSelected) {
			this.setState({ selectedBoardingstopId: row.id });
		}else {
			this.setState({ selectedBoardingstopId: null });
		}
	},
	
	//Add modal open/close
	closeAddModal: function() {
		this.setState({ showAddModal: false });
		this.refs.addBoardingstop.clearAddObject();
	},

	openAddModal: function() {
		this.refs.addBoardingstop.clearAddObject();		
		this.setState({ showAddModal: true });
	},

	//Update modal open/close
	closeUpdateModal: function() {
		this.setState({showUpdateModal: false});
		this.refs.updateBoardingstop.clearUpdateObject();
	},
	
	openUpdateModal: function() {
		this.refs.updateBoardingstop.fillUpdateObject();
		this.setState({showUpdateModal: true});
	},

	//BEGIN: Delete Route
	onDeleteBtnClicked: function() {
		
		axios.delete('http://172.16.1.129:8080/boardingstops/' + this.state.selectedBoardingstopId)
			.then(function (response) {
				this.refreshTable();
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});		
	},
	//END: Delete Route
	
	getBoardingstopById: function(id) {

		for(var i in this.state.data) {
			if(this.state.data[i].id === id) {
				return this.state.data[i];
			}
		}
		return '';
	},

	//Get table data and update the state to render
	refreshTable: function() {
		
		axios.get('http://172.16.1.129:8080/boardingstops')
		.then(function (boardingstops) {
			this.setState({data: boardingstops.data});
		}.bind(this));
	}
});

export default Boardingstops;