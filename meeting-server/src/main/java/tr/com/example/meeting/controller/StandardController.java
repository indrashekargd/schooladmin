package tr.com.example.meeting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tr.com.example.meeting.domain.Standard;
import tr.com.example.meeting.service.StandardService;

/**
 * Standard RESTful controller for CRUD operations.
 * 
 * @author Indrashekar G R
 *
 */
@RestController
public class StandardController {

	@Autowired
    private StandardService service;
	
	
	@GetMapping("/standards")
    public ResponseEntity<List<Standard>> getDepartments() {
		List<Standard> standards = this.service.list();
    	return new ResponseEntity<List<Standard>>(standards, HttpStatus.OK);
    }
	
	@GetMapping(value = "/standards/{id}")
    public ResponseEntity<Standard> getDepartmentById(@PathVariable("id") Integer id) {
		Standard standard = this.service.findById(id);
    	
    	if(standard == null){
    		return new ResponseEntity<Standard>(HttpStatus.NOT_FOUND);
    	}else{
    		return new ResponseEntity<Standard>(standard, HttpStatus.OK);
    	}    	
    }
	
	@PostMapping(value = "/standards")
	public ResponseEntity<Standard> addStandard(@RequestBody Standard standard) {
    	this.service.saveStandard(standard);
		return new ResponseEntity<Standard>(standard, HttpStatus.CREATED);
	}
	
	@PutMapping(value = "/standards/{id}")
	public ResponseEntity<Standard> updateStandard(@PathVariable Long id, @RequestBody Standard standard) {
    	this.service.updateStandard(standard);
		return new ResponseEntity<Standard>(standard, HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/standards/{id}")
	public ResponseEntity<Void> deleteStandard(@PathVariable("id") Integer id) {
		this.service.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}  
	
}
