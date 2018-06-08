package tr.com.example.meeting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tr.com.example.meeting.dao.CaretakerDAO;
import tr.com.example.meeting.domain.Caretaker;

/**
 * Caretaker service.
 * 
 * @author Indrashekar G R
 *
 */
@Transactional
@Service("caretakerService")
public class CaretakerService {

	@Autowired
    private CaretakerDAO dao;
 
    public List<Caretaker> list() {
        return dao.list();
    }    
    
    public Caretaker findById(Integer id) {
        return dao.findById(id);
    }
 
    public Boolean saveCaretaker(Caretaker ct) {
        Boolean result = dao.save(ct);
        return result;
    }
 
    public Boolean updateCaretaker(Caretaker ct) {
    	Caretaker entity = dao.findById(ct.getId());
        if(entity != null){
        	entity.setName(ct.getName());
        	entity.setStudents(ct.getStudents());
//        	entity.setMeetings(department.getMeetings());
        	dao.update(entity);
        	return true;
        }else{
        	return false;
        }
    }
    
    public Boolean deleteById(Integer id) {
    	Caretaker entity = dao.findById(id);
        if(entity != null){
        	dao.delete(entity);
        	return true;
        }else{
        	return false;
        }
    }
	
}
