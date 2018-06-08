package tr.com.example.meeting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tr.com.example.meeting.dao.StudentDAO;
import tr.com.example.meeting.domain.Student;

@Transactional
@Service("studentService")
public class StudentService {
	
	 @Autowired
	    private StudentDAO dao;
	 
	    public List<Student> list() {
	        return dao.list();
	    }
	    
	    public Student findById(Integer id) {
	        return dao.findById(id);
	    }
	    
	    public List<Student> getStudentByStandardId(Integer standardId) {
	        return dao.getStudentByStandardId(standardId);
	    }
	    
	    public List<Student> getStudentByRouteId(Integer routeId) {
	    	return dao.getStudentByRouteId(routeId);
	    }
	    
	    public Student findByName (String name) {
	    	return dao.findByName(name);
	    }
	    
	    public Boolean saveStudent(Student student) {
	        Boolean result = dao.save(student);
	        return result;
	    }
	 
	    public Boolean updateStudent(Student student) {
	    	Student entity = dao.findById(student.getId());
	        if(entity != null){
	            entity.setName(student.getName());
	            entity.setAdmissionno(student.getAdmissionno());
	            entity.setPname(student.getPname());
	            entity.setDateOfBirth(student.getDateOfBirth());
	            entity.setDateOfJoining(student.getDateOfJoining());
	            entity.setStandard(student.getStandard());
	            entity.setTname(student.getTname());
	            entity.setStandardId(student.getStandardId());
	            entity.setRouteId(student.getRouteId());
	            entity.setCaretakerId(student.getCaretakerId());
	            entity.setBoardingstopId(student.getBoardingstopId());
	            dao.update(entity);
	            return true;
	        }else{
	        	return false;
	        }
	    }
	    
	    public Boolean deleteById(Integer id) {
	    	Student entity = dao.findById(id);
	        if(entity != null){
	        	dao.delete(entity);
	        	return true;
	        }else{
	        	return false;
	        }    	
	    }

}
