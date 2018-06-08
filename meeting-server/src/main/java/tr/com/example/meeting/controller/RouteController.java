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

import tr.com.example.meeting.domain.Route;
import tr.com.example.meeting.service.RouteService;

/**
 * Route RESTful controller for CRUD operations.
 * 
 * @author Indrashekar G R
 *
 */
@RestController
public class RouteController {

	@Autowired
    private RouteService service;
	
	
	@GetMapping("/routes")
    public ResponseEntity<List<Route>> getRoutes() {
		List<Route> routes = this.service.list();
    	return new ResponseEntity<List<Route>>(routes, HttpStatus.OK);
    }
	
	@GetMapping(value = "/routes/{id}")
    public ResponseEntity<Route> getRouteById(@PathVariable("id") Integer id) {
		Route route = this.service.findById(id);
    	
    	if(route == null){
    		return new ResponseEntity<Route>(HttpStatus.NOT_FOUND);
    	}else{
    		return new ResponseEntity<Route>(route, HttpStatus.OK);
    	}    	
    }
	
	@PostMapping(value = "/routes")
	public ResponseEntity<Route> addRoute(@RequestBody Route route) {
    	this.service.saveRoute(route);
		return new ResponseEntity<Route>(route, HttpStatus.CREATED);
	}
	
	@PutMapping(value = "/routes/{id}")
	public ResponseEntity<Route> updateRoute(@PathVariable Long id, @RequestBody Route route) {
    	this.service.updateRoute(route);
		return new ResponseEntity<Route>(route, HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/routes/{id}")
	public ResponseEntity<Void> deleteRoute(@PathVariable("id") Integer id) {
		this.service.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}  
}
