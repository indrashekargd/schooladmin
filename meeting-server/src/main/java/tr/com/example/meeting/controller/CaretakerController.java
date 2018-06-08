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

import tr.com.example.meeting.domain.Caretaker;
import tr.com.example.meeting.service.CaretakerService;

@RestController
public class CaretakerController {

	@Autowired
    private CaretakerService service;
	
	
	@GetMapping("/caretakers")
    public ResponseEntity<List<Caretaker>> getCaretakers() {
		List<Caretaker> bs = this.service.list();
    	return new ResponseEntity<List<Caretaker>>(bs, HttpStatus.OK);
    }
	
	@GetMapping(value = "/caretakers/{id}")
    public ResponseEntity<Caretaker> getCaretakerById(@PathVariable("id") Integer id) {
		Caretaker bs = this.service.findById(id);
    	
    	if(bs == null){
    		return new ResponseEntity<Caretaker>(HttpStatus.NOT_FOUND);
    	}else{
    		return new ResponseEntity<Caretaker>(bs, HttpStatus.OK);
    	}    	
    }
	
	@PostMapping(value = "/caretakers")
	public ResponseEntity<Caretaker> addCaretaker(@RequestBody Caretaker ct) {
    	this.service.saveCaretaker(ct);
		return new ResponseEntity<Caretaker>(ct, HttpStatus.CREATED);
	}
	
	@PutMapping(value = "/caretakers/{id}")
	public ResponseEntity<Caretaker> updateCaretaker(@PathVariable Long id, @RequestBody Caretaker ct) {
    	this.service.updateCaretaker(ct);
		return new ResponseEntity<Caretaker>(ct, HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/caretakers/{id}")
	public ResponseEntity<Void> deleteCaretaker(@PathVariable("id") Integer id) {
		this.service.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}  
	
}
