package tr.com.example.meeting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tr.com.example.meeting.dao.StandardDAO;
import tr.com.example.meeting.domain.Standard;

/**
 * Standard service.
 * 
 * @author Indrashekar G R
 *
 */
@Transactional
@Service("standardService")
public class StandardService {

	
	 @Autowired
	    private StandardDAO dao;
	 
	    public List<Standard> list() {
	        return dao.list();
	    }    
	    
	    public Standard findById(Integer id) {
	        return dao.findById(id);
	    }
	 
	    public Boolean saveStandard(Standard standard) {
	        Boolean result = dao.save(standard);
	        return result;
	    }
	 
	    public Boolean updateStandard(Standard standard) {
	    	Standard entity = dao.findById(standard.getId());
	        if(entity != null){
	        	entity.setName(standard.getName());
	        	entity.setStudents(standard.getStudents());
//	        	entity.setMeetings(department.getMeetings());
	        	dao.update(entity);
	        	return true;
	        }else{
	        	return false;
	        }
	    }
	    
	    public Boolean deleteById(Integer id) {
	    	Standard entity = dao.findById(id);
	        if(entity != null){
	        	dao.delete(entity);
	        	return true;
	        }else{
	        	return false;
	        }
	    }
	
	
}
