package tr.com.example.meeting.dao;

import org.springframework.stereotype.Repository;

import tr.com.example.meeting.domain.Caretaker;

/**
 * Caretaker DAO.
 * 
 * @author Indrashekar G R
 *
 */
@Repository("caretakerDAO")
public class CaretakerDAO extends AbstractDao<Integer, Caretaker>{
	
	public Caretaker findById(Integer id) {
		Caretaker ct = getByKey(id);
        return ct;
    }
	
	public Boolean save(Caretaker ct) {
		Boolean result = persist(ct);
		return result;
    }

}
