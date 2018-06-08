package tr.com.example.meeting.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

/**
 * Student Entity.
 * 
 * @author Indrashekar G R
 *
 */

@Entity
@Table(name = "STUDENT")
public class Student implements Serializable{
	
private static final long serialVersionUID = 1L;

@Id
@Column(name="STUDENT_ID", unique = true, nullable = false)
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;

@NotEmpty
@Column(name="NAME", nullable=false)
private String name;

@NotEmpty
@Column(name="P_NAME", nullable=false)
private String pname;

@NotNull
@Column(name="ADMISSION_NO", nullable=false)
private Integer admissionno;

@Temporal(TemporalType.DATE)
@Column(name = "DOB")
private Date dateOfBirth;

@Temporal(TemporalType.DATE)
@Column(name= "DOJ")
private Date dateOfJoining;

@Column(name="Standard")
private Integer standard;

@NotEmpty
@Column(name="T_NAME", nullable=false)
private String tname;

@Column(name="STANDARD_ID")
private Integer standardId;

@Column(name="ROUTE_ID")
private Integer routeId;

@Column(name="BOARDING_STOP_ID")
private Integer boardingstopId;

@Column(name="CARETAKER_ID")
private Integer caretakerId;
	
public Student() {}
	    
public Student(Integer id, String name, String pname, Integer admissionno, Integer standard, String tname, Integer studentId, Integer routeId, Integer boardingstopId, Integer caretakerId) {
		super();
		this.id = id;
		this.name = name;
		this.pname = pname;
		this.admissionno = admissionno;
		this.standard = standard;
		this.tname= tname;
		this.standardId = studentId;
		this.routeId = routeId;
		this.boardingstopId = boardingstopId;
		this.caretakerId = caretakerId;
}
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public Integer getAdmissionno() {
		return admissionno;
	}

	public void setAdmissionno(Integer admissionno) {
		this.admissionno = admissionno;
	}

	public Integer getStandard() {
		return standard;
	}

	public void setStandard(Integer standard) {
		this.standard = standard;
	}

	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}
	
	
	public Integer getStandardId() {
		return standardId;
	}

	public void setStandardId(Integer standardId) {
		this.standardId = standardId;
	}
	
	public Integer getRouteId() {
		return routeId;
	}

	public void setRouteId(Integer routeId) {
		this.routeId = routeId;
	}

	public Integer getBoardingstopId() {
		return boardingstopId;
	}

	public void setBoardingstopId(Integer boardingstopId) {
		this.boardingstopId = boardingstopId;
	}

	public Integer getCaretakerId() {
		return caretakerId;
	}

	public void setCaretakerId(Integer caretakerId) {
		this.caretakerId = caretakerId;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	
	public Date getDateOfJoining() {
		return dateOfJoining;
	}

	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((standardId == null) ? 0 : standardId.hashCode());
		result = prime * result + ((routeId == null) ? 0 : routeId.hashCode());
		result = prime * result + ((boardingstopId == null) ? 0 : boardingstopId.hashCode());
		result = prime * result + ((caretakerId == null) ? 0 : caretakerId.hashCode());
		result = prime * result + ((tname == null) ? 0 : tname.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((pname == null) ? 0 : pname.hashCode());
		result = prime * result + ((admissionno == null) ? 0 : admissionno.hashCode());
		result = prime * result + ((standard == null) ? 0 : standard.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Student other = (Student) obj;
		if (standardId == null) {
			if (other.standardId != null)
				return false;
		} else if (!standardId.equals(other.standardId))
			return false;
		
		if (routeId == null) {
			if (other.routeId != null)
				return false;
		} else if (!routeId.equals(other.routeId))
			return false;
		
		if (boardingstopId == null) {
			if (other.boardingstopId != null)
				return false;
		} else if (!boardingstopId.equals(other.boardingstopId))
			return false;
		
		if (caretakerId == null) {
			if (other.caretakerId != null)
				return false;
		} else if (!caretakerId.equals(other.caretakerId))
			return false;
		if (tname == null) {
			if (other.tname != null)
				return false;
		} else if (!tname.equals(other.tname))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (pname == null) {
			if (other.pname != null)
				return false;
		} else if (!pname.equals(other.pname))
			return false;
		if (admissionno == null) {
			if (other.admissionno != null)
				return false;
		} else if (!admissionno.equals(other.admissionno))
			return false;
		if (standard == null) {
			if (other.standard != null)
				return false;
		} else if (!standard.equals(other.standard))
			return false;
		return true;
	}

	

}
