package tr.com.example.meeting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tr.com.example.meeting.dao.BoardingstopDAO;
import tr.com.example.meeting.domain.Boardingstop;

/**
 * Boarding_stop service.
 * 
 * @author Indrashekar G R
 *
 */
@Transactional
@Service("boardingstopService")
public class BoardingstopService {
	
	@Autowired
    private BoardingstopDAO dao;
 
    public List<Boardingstop> list() {
        return dao.list();
    }    
    
    public Boardingstop findById(Integer id) {
        return dao.findById(id);
    }
 
    public Boolean saveBoardingstop(Boardingstop bs) {
        Boolean result = dao.save(bs);
        return result;
    }
 
    public Boolean updateBoardingstop(Boardingstop bs) {
    	Boardingstop entity = dao.findById(bs.getId());
        if(entity != null){
        	entity.setName(bs.getName());
        	entity.setStudents(bs.getStudents());
//        	entity.setMeetings(department.getMeetings());
        	dao.update(entity);
        	return true;
        }else{
        	return false;
        }
    }
    
    public Boolean deleteById(Integer id) {
    	Boardingstop entity = dao.findById(id);
        if(entity != null){
        	dao.delete(entity);
        	return true;
        }else{
        	return false;
        }
    }

}
