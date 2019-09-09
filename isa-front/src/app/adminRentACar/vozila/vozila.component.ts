import { Component, OnInit } from '@angular/core';
import { Vozilo } from 'src/app/model/Vozilo';
import { voziloServis } from 'src/app/service/voziloServis';
import * as $ from 'jquery';
import { Lokacija } from 'src/app/model/Lokacija';
import { lokacijeServis } from 'src/app/service/lokacijeServis';

@Component({
  selector: 'app-vozila',
  templateUrl: './vozila.component.html',
  styleUrls: ['./vozila.component.css']
})
export class VozilaComponent implements OnInit {

  vozila : Vozilo[] = [];
  novoVozilo : Vozilo = new Vozilo();
  prikazFormeZaDodavanjeNovog : boolean = false; 
  prikazFormeZaIzmenuPostojeceg : boolean = false;
  poruka : string = "";
  porukaBrisanje = "";
  izmena : boolean = false;
  opcije = [
    {name: "DA", value: "DA"},
    {name: "NE", value: "NE"}
  ]
  opcije1 = [
    {name: "MINI", value: "MINI"},
    {name: "LIMUZINA", value: "LIMUZINA"},
    {name: "KARAVAN", value: "KARAVAN"},
    {name: "KABRIOLET", value: "KABRIOLET"}
  
  ]
  selektovanaOpcija : string = "";
  selektovanaOpcija1 : string = ""
  selektovanaOpcijaIzmena : string = "";
  selektovanaOpcijaIzmena1 : string = "";
  selektovanaLokacija : string = "";
  selektovanaLokacijaIzmena : string = "";
  lokacije : Lokacija[] = [];

  constructor(private voziloServis : voziloServis, private lokacijeServis : lokacijeServis) { 

    this.voziloServis.vratiVozilo().subscribe(
      data => {
        this.vozila = data;
      }
    )

    this.lokacijeServis.vratiSveLokacije().subscribe(
      data => {
        this.lokacije = data;
      }
    )

  }
 
  ngOnInit() {
  }

  dodajNovi(){
    this.prikazFormeZaDodavanjeNovog = true;
  }

  izmeni(v : Vozilo){
    this.prikazFormeZaIzmenuPostojeceg = true;
    this.novoVozilo.id = v.id;
    this.novoVozilo.cena = v.cena;
    this.novoVozilo.naziv = v.naziv;
    this.novoVozilo.marka = v.marka;
    this.novoVozilo.model = v.model;
    this.novoVozilo.godinaProizvodnje = v.godinaProizvodnje;
    this.novoVozilo.brSedista = v.brSedista;
    this.selektovanaOpcijaIzmena1 = v.tip;
    this.selektovanaOpcijaIzmena = v.naPopustu;
    this.selektovanaLokacijaIzmena = v.adresaLokacije;
    this.novoVozilo.popust = v.popust;
    this.izmena = true;
    this.poruka = ""; 
  }

  Dodaj(){
    let provera : boolean = false;
    this.novoVozilo.tip = this.selektovanaOpcija1;
    this.novoVozilo.naPopustu = this.selektovanaOpcija;
    this.novoVozilo.adresaLokacije = this.selektovanaLokacija;

    if(this.novoVozilo.cena == ""){
      provera = true;
      $("#cenaVoz").addClass('border-danger');
    } else {
      $("#cenaVoz").removeClass('border-danger');
    }

    if(this.novoVozilo.naziv == ""){
      provera = true;
      $("#nazivVoz").addClass('border-danger');
    } else {
      $("#nazivVoz").removeClass('border-danger');
    }

    if(this.novoVozilo.marka == ""){
      provera = true;
      $("#markaVoz").addClass('border-danger');
    } else {
      $("#markaVoz").removeClass('border-danger');
    }

    if(this.novoVozilo.model == ""){
      provera = true;
      $("#modelVoz").addClass('border-danger');
    } else {
      $("#modelVoz").removeClass('border-danger');
    }

    if(this.novoVozilo.godinaProizvodnje == ""){
      provera = true;
      $("#proizVoz").addClass('border-danger');
    } else {
      $("#proizVoz").removeClass('border-danger');
    }

    if(this.novoVozilo.brSedista == 0){
      provera = true;
      $("#brSedVoz").addClass('border-danger');
    } else {
      $("#brSedVoz").removeClass('border-danger');
    }

    if(this.novoVozilo.tip == ""){
      provera = true;
      $("#tipVoz").addClass('border-danger');
    } else {
      $("#tipVoz").removeClass('border-danger');
    }

    if(this.novoVozilo.naPopustu == ""){
      provera = true;
      $("#popustVozilo").addClass('border-danger');
    } else {
      $("#popustVozilo").removeClass('border-danger');
    }

    if(this.novoVozilo.adresaLokacije == ""){
      provera = true;
      $("#adresaLokacije").addClass('border-danger');
    } else {
      $("#adresaLokacije").removeClass('border-danger');
    }

    if(!provera){
      this.voziloServis.dodajVozilo(this.novoVozilo).subscribe(
        data => {
          this.voziloServis.vratiVozilo().subscribe(
            data => {
              this.vozila = data;
              this.prikazFormeZaDodavanjeNovog = false;
              this.novoVozilo = new Vozilo();
            }
          )
        },
        error => {
          this.poruka = "Uneto ime vec postoji!";
        }
        
      )
    }
  }

  obrisi(v : Vozilo){
    this.voziloServis.obrisi(v).subscribe(
      data => {
        this.vozila = data;
        this.porukaBrisanje = "";  
      },
      error => {
        this.porukaBrisanje = "Nije moguce brisanje vozila!";
      }
    )
  }

  Izmena(){
    if(this.izmena == true){
      this.izmena = false;
      this.prikazFormeZaIzmenuPostojeceg = false;
      this.novoVozilo.adresaLokacije = this.selektovanaLokacijaIzmena;
      this.novoVozilo.naPopustu = this.selektovanaOpcijaIzmena;
      this.novoVozilo.tip = this.selektovanaOpcijaIzmena1;
      this.voziloServis.izmeniVozilo(this.novoVozilo).subscribe(
        data => {
          this.voziloServis.vratiVozilo().subscribe(
            data => {
              this.vozila = data;
              $("#cenaVozila").val("");
              $("#nazivVozila").val("");
              $("#markaVozila").val("");
              $("#modelVozila").val("");
              $("#proizGodVozila").val("");
              $("#brSedVozila").val("");
              $("#tipVozilo").val("");
              $("#popustVoz").val("");
              $("#adresaLokVozila").val("");
              $("#popustVozila").val("");
              this.novoVozilo = new Vozilo();
              this.poruka = "";
            }
          )
        },
        error => {
          this.poruka = "Uneto ime vec postoji!";
        }
      )
    } else {
      this.poruka = "Odaberite vozilo za izmenu!";
    }
  }

}
