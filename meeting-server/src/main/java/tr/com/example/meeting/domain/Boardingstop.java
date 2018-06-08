package tr.com.example.meeting.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * Boarding_Stop Entity.
 * 
 * @author Indrashekar G R
 *
 */
@Entity
@Table(name = "BOARDINGSTOP")

public class Boardingstop implements Serializable {
	
private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="BOARDING_STOP_ID", unique = true, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private Integer id; 
	
	@NotEmpty
    @Column(name="NAME", nullable=false)
	private String name;
		
	@OneToMany(mappedBy = "boardingstopId", fetch = FetchType.EAGER)
    @Fetch(value = FetchMode.SELECT)    
	private List<Student> students;

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

	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}
	
	public Boardingstop() {}
    
	public Boardingstop(Integer id, String name) {
			this.id = id;
			this.name = name;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((students == null) ? 0 : students.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		Boardingstop other = (Boardingstop) obj;
		
		if (students == null) {
			if (other.students != null)
				return false;
		} else if (!students.equals(other.students))
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
		return true;
	}
}
