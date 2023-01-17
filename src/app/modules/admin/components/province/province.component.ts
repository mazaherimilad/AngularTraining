import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/services/province.service';
import { Province } from './province';
import { Regioni } from './regioni';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  constructor(private province: ProvinceService) { }
  listRegioni:any;
  regioniSelected!: string;
  listProvince!: any;
  provinceSelected!: string;
  comuneSelected!:string;
  listComuni!: any;
  listCap!: any;
  CAPSelected!: any;

  ngOnInit() {
    this.province.getRegion().subscribe(data => {
      this.listRegioni = data.regioni;
      console.log(this.listRegioni)
    });
  }
onRegioniSelected(kcIstat:number){
  console.log(kcIstat);
  this.province.getProvinceOfSelectedRegion(kcIstat).subscribe(data => {this.listProvince=data.province;
    console.log(this.listProvince);

  })}
  onProvinceSelected(ksiglaProv:string){
    console.log(ksiglaProv);

   this.province.getComuneOfSelectedProvince(ksiglaProv).subscribe(data =>{
      this.listComuni=data.comuni;
      console.log(this.listComuni);
    })
    }
    onComuneSelected(kcCatastale:string){
      console.log(kcCatastale);
      this.province.getCapOfSelectedComune(kcCatastale).subscribe(data=>{this.listCap=data.cap;
      console.log(this.listCap);})
    }

    showDetails = false;

  showInfo() {
    this.showDetails = true;
  }
  }




