package tr.com.example.meeting.dao;

import org.springframework.stereotype.Repository;

import tr.com.example.meeting.domain.Boardingstop;

/**
 * Boarding_Stop DAO.
 * 
 * @author Indrashekar G R
 *
 */
@Repository("boardingstopDAO")
public class BoardingstopDAO extends AbstractDao<Integer, Boardingstop>{
	
	public Boardingstop findById(Integer id) {
		Boardingstop bs = getByKey(id);
        return bs;
    }
	
	public Boolean save(Boardingstop bs) {
		Boolean result = persist(bs);
		return result;
    }

}
