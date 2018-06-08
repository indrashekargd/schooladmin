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

import tr.com.example.meeting.domain.Student;
import tr.com.example.meeting.service.StudentService;

@RestController
public class StudentController {

	@Autowired
    private StudentService service;

	@GetMapping("/students")
    public ResponseEntity<List<Student>> student() {
		List<Student> students = this.service.list();
    	return new ResponseEntity<List<Student>>(students, HttpStatus.OK);
    }
    
    @GetMapping(value = "/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable("id") Integer id) {
    	Student student = this.service.findById(id);
    	if(student == null){
    		return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
    	}else{
    		return new ResponseEntity<Student>(student, HttpStatus.OK);
    	}
    }
    
    @GetMapping(value = "/getname/name={name}")
    public ResponseEntity<Student> getStudentByName(@PathVariable("name") String name) {
    	Student student = this.service.findByName(name);
    	if(student == null){
    		return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
    	}else{
    		return new ResponseEntity<Student>(student, HttpStatus.OK);
    	}
    }
    
    @GetMapping(value = "/listofstudentclasses/{standardId}")
    public ResponseEntity<List<Student>> findByStandardId(@PathVariable("standardId") Integer standardId) {
    	List<Student> student = this.service.getStudentByStandardId(standardId);
    	if(student == null){
    		return new ResponseEntity<List<Student>>(HttpStatus.NOT_FOUND);
    	}else{
    		return new ResponseEntity<List<Student>>(student, HttpStatus.OK);
    	}
    }
    
    @GetMapping(value = "/listofstudentroutes/{routeId}")
    	public ResponseEntity<List<Student>> getStudentByRouteId(@PathVariable("routeId") Integer routeId) {
        	List<Student> student = this.service.getStudentByRouteId(routeId);
        	if(student == null){
        		return new ResponseEntity<List<Student>>(HttpStatus.NOT_FOUND);
        	}else{
        		return new ResponseEntity<List<Student>>(student, HttpStatus.OK);
        	}
    }
    
    
    @PostMapping(value = "/students")
	public ResponseEntity<Student> addStudent(@RequestBody Student student) {
    	//TODO: check result
    	this.service.saveStudent(student);
		return new ResponseEntity<Student>(student, HttpStatus.CREATED);
	}
    
    @PutMapping(value = "/students/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Integer id, @RequestBody Student student) {
    	//TODO: check result    	
    	this.service.updateStudent(student);
		return new ResponseEntity<Student>(student, HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/students/{id}")
	public ResponseEntity<Void> deleteStudent(@PathVariable("id") Integer id) {
    	//TODO: check result		
		this.service.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
}
