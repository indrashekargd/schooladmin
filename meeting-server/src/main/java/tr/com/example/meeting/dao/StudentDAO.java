package tr.com.example.meeting.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import tr.com.example.meeting.domain.Student;

@Repository("studentDAO")
public class StudentDAO extends AbstractDao<Integer, Student>{
	
	//private static List<Student> users;
	
	public Student findById(Integer id) {
		Student student = getByKey(id);
        return student;
    }
	
	public Student findByName (String name) {
		Query query= getSession().
		        createQuery("from Student where name=:name");
		query.setParameter("name", name);
		Student student = (Student) query.uniqueResult();
		return student;
	}
 
    public Boolean save(Student student) {
		Boolean result = persist(student);
		return result;
    }
    
    public List<Student> getStudentByStandardId (Integer sid)  
    {  
        //Session currentSession = sessionFactory.getCurrentSession();  
          
        List<Student> list = getSession().createCriteria(Student.class)  
                                 .add(Restrictions.eq("standardId", sid))  
                                 .list();  
        return list;  
    } 
    
    public List<Student> getStudentByRouteId (Integer rid){
    	List<Student> list = getSession().createCriteria(Student.class)
    			.add(Restrictions.eq("routeId", rid)).list();
    	return list;
    	
    }
    
    
    

}
