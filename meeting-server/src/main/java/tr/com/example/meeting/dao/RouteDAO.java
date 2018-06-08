package tr.com.example.meeting.dao;

import org.springframework.stereotype.Repository;

import tr.com.example.meeting.domain.Route;

/**
 * Route DAO.
 * 
 * @author Indrashekar G R
 *
 */
@Repository("routeDAO")
public class RouteDAO extends AbstractDao<Integer, Route>{
	
	public Route findById(Integer id) {
		Route route = getByKey(id);
        return route;
    }
	
	public Boolean save(Route route) {
		Boolean result = persist(route);
		return result;
    }


}
