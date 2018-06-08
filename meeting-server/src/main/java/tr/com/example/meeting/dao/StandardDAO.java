package tr.com.example.meeting.dao;

import org.springframework.stereotype.Repository;

import tr.com.example.meeting.domain.Standard;

/**
 * Standard DAO.
 * 
 * @author Indrashekar G R
 *
 */
@Repository("standardDAO")
public class StandardDAO extends AbstractDao<Integer, Standard>{
	
	public Standard findById(Integer id) {
		Standard standard = getByKey(id);
        return standard;
    }
	
	public Boolean save(Standard standard) {
		Boolean result = persist(standard);
		return result;
    }


}
