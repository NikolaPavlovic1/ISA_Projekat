package ISA.project.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
public class Lokacija {
	
	@Id
	@GeneratedValue
	private long lokacijaId;
	
	private String adresa;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="IdRentACar", referencedColumnName="rentACarId")
	private RentACar rentACar;
	
	@OneToMany(targetEntity=Vozilo.class, mappedBy="lokacija", cascade = CascadeType.ALL)
	private List<Vozilo> spisakVozila = new ArrayList<>();

	public Lokacija() {
		
	}
	
	public Lokacija(String adresa, RentACar rentACar) {
		super();
		this.adresa = adresa;
		this.rentACar = rentACar;
	}

	
	public String getAdresa() {
		return adresa;
	}


	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}


	public RentACar getRentACar() {
		return rentACar;
	}


	public void setRentACar(RentACar rentACar) {
		this.rentACar = rentACar;
	}


	public long getLokacijaId() {
		return lokacijaId;
	}


	public void setLokacijaId(long lokacijaId) {
		this.lokacijaId = lokacijaId;
	}



	
}
