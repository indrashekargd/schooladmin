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

import tr.com.example.meeting.domain.Boardingstop;
import tr.com.example.meeting.service.BoardingstopService;

/**
 * Boarding_stop RESTful controller for CRUD operations.
 * 
 * @author Indrashekar G R
 *
 */
@RestController
public class BoardingstopController {

	@Autowired
    private BoardingstopService service;
	
	
	@GetMapping("/boardingstops")
    public ResponseEntity<List<Boardingstop>> getBoardingstops() {
		List<Boardingstop> boardingstops = this.service.list();
    	return new ResponseEntity<List<Boardingstop>>(boardingstops, HttpStatus.OK);
    }
	
	@GetMapping(value = "/boardingstops/{id}")
    public ResponseEntity<Boardingstop> getBoardingstopById(@PathVariable("id") Integer id) {
		Boardingstop boardingstop = this.service.findById(id);
    	
    	if(boardingstop == null){
    		return new ResponseEntity<Boardingstop>(HttpStatus.NOT_FOUND);
    	}else{
    		return new ResponseEntity<Boardingstop>(boardingstop, HttpStatus.OK);
    	}    	
    }
	
	@PostMapping(value = "/boardingstops")
	public ResponseEntity<Boardingstop> addBoardingstop(@RequestBody Boardingstop boardingstop) {
    	this.service.saveBoardingstop(boardingstop);
		return new ResponseEntity<Boardingstop>(boardingstop, HttpStatus.CREATED);
	}
	
	@PutMapping(value = "/boardingstops/{id}")
	public ResponseEntity<Boardingstop> updateBoardingstop(@PathVariable Long id, @RequestBody Boardingstop route) {
    	this.service.updateBoardingstop(route);
		return new ResponseEntity<Boardingstop>(route, HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/boardingstops/{id}")
	public ResponseEntity<Void> deleteBoardingstop(@PathVariable("id") Integer id) {
		this.service.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}  
}
