import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TransmissionFormService {
  table = [];
  conservationVal = localStorage.getItem('conservationVal') ? JSON.parse(localStorage.getItem('conservationVal')) : [];
  bool = false;
  constructor() { }

  changeUrl($event) {
    $event.preventDefault();
  }
  

  saveToLocalStorage() {

    localStorage.setItem('conservationVal', JSON.stringify(this.conservationVal))

  }
  
}
