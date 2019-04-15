import { Component, OnInit } from '@angular/core';
import { TransmissionFormService } from '../Services/transmission-form.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
  
  table;
  conservationVal;
  formular;
  
  constructor(public transmissionFormService: TransmissionFormService) { }
  

  ngOnInit() {
    this.table = this.transmissionFormService.table;
    this.conservationVal = this.transmissionFormService.conservationVal;
  }

  doMouseOver(i) {
    let index = i;
    this.conservationVal[index][4] = true;
  }

  doMouseOut(i) {
    let index = i;
    this.conservationVal[index][4] = false;
  }


  adoptKitten(i) {
    let index = i;
    this.conservationVal[index][5] = true;
    this.saveToLocalStorage()
  }
  
  removeKitten(j) {
    let index = j;
    this.conservationVal[index][5] = false;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    this.transmissionFormService.saveToLocalStorage();
  }
}


