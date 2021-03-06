package ISA.project.dto;

import java.sql.Date;

public class RezervacijaKarataDTO {

	private long idSedista;
	private int brSedista;
	private String ime;
	private String prezime;
	private String brTelefona;
	private String email;
	private String brPasosa;
	private int idLeta;
	private Date datumOdLeta;
	private Date datumDoLeta;
	
	public RezervacijaKarataDTO() {
		
	}

	public long getIdSedista() {
		return idSedista;
	}

	public void setIdSedista(long idSedista) {
		this.idSedista = idSedista;
	}

	public int getBrSedista() {
		return brSedista;
	}

	public void setBrSedista(int brSedista) {
		this.brSedista = brSedista;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public String getBrTelefona() {
		return brTelefona;
	}

	public void setBrTelefona(String brTelefona) {
		this.brTelefona = brTelefona;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBrPasosa() {
		return brPasosa;
	}

	public void setBrPasosa(String brPasosa) {
		this.brPasosa = brPasosa;
	}

	public int getIdLeta() {
		return idLeta;
	}

	public void setIdLeta(int idLeta) {
		this.idLeta = idLeta;
	}

	public Date getDatumOdLeta() {
		return datumOdLeta;
	}

	public void setDatumOdLeta(Date datumOdLeta) {
		this.datumOdLeta = datumOdLeta;
	}

	public Date getDatumDoLeta() {
		return datumDoLeta;
	}

	public void setDatumDoLeta(Date datumDoLeta) {
		this.datumDoLeta = datumDoLeta;
	}
	
	
}
