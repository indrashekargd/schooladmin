package tr.com.example.meeting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tr.com.example.meeting.dao.RouteDAO;
import tr.com.example.meeting.domain.Route;

/**
 * Route service.
 * 
 * @author Indrashekar G R
 *
 */
@Transactional
@Service("routeService")
public class RouteService {
	
	@Autowired
    private RouteDAO dao;
 
    public List<Route> list() {
        return dao.list();
    }    
    
    public Route findById(Integer id) {
        return dao.findById(id);
    }
 
    public Boolean saveRoute(Route route) {
        Boolean result = dao.save(route);
        return result;
    }
 
    public Boolean updateRoute(Route route) {
    	Route entity = dao.findById(route.getId());
        if(entity != null){
        	entity.setName(route.getName());
        	entity.setStudents(route.getStudents());
//        	entity.setMeetings(department.getMeetings());
        	dao.update(entity);
        	return true;
        }else{
        	return false;
        }
    }
    
    public Boolean deleteById(Integer id) {
    	Route entity = dao.findById(id);
        if(entity != null){
        	dao.delete(entity);
        	return true;
        }else{
        	return false;
        }
    }

}
