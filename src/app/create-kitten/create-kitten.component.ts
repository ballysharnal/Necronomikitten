import { Component, OnInit } from '@angular/core';
import { TransmissionFormService } from '../Services/transmission-form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {
  table;
  conservationVal;
  bool;
  boolButtonColor = false;
  imgSr:string = 'http://www.miskatonic-montreal.com/wp-content/uploads/2013/12/lovecraft2-640x420.jpg';
  imgSrc;
  formular = new FormGroup({
    url: new FormControl('', [Validators.required, Validators.minLength(4)]),
    name : new FormControl('', [Validators.required, Validators.minLength(4)]),
    race : new FormControl('', [Validators.required, Validators.minLength(4)]),
    birth : new FormControl('', [Validators.required, Validators.minLength(4)])
  })
  constructor(public transmissionFormService: TransmissionFormService) { }
 

  ngOnInit() {
    this.table = this.transmissionFormService.table;
    this.conservationVal = this.transmissionFormService.conservationVal;
    this.bool = this.transmissionFormService.bool;
    this.boolButtonColor = false;
    
  }

  changeUrl($event) {

    $event.preventDefault();
    this.transmissionFormService.changeUrl($event);
    this.imgSrc = this.formular.value.url;
    this.bool = true;

  }

  onSubmit($event) {

    $event.preventDefault();
    let urlForm = this.formular.value.url;
    let nameForm = this.formular.value.name;
    let raceForm = this.formular.value.race;
    let birthForm = this.formular.value.birth;
    if (nameForm.length >= 4 && raceForm.length >= 4 && urlForm.length >= 4 && birthForm.length >= 4) {
      this.table.push(nameForm);
      this.table.push(raceForm);
      this.table.push(birthForm);
      this.table.push(urlForm);
      this.conservationVal.push([nameForm, raceForm, birthForm, urlForm, false, false]);
      this.table.splice(0,5);
      this.imgSrc = `${this.conservationVal[this.conservationVal.length - 1][3]}`;
      this.boolButtonColor = true;
    }else {
      this.boolButtonColor = false;
    }

    
  }
  saveToLocalStorage() {
    this.transmissionFormService.saveToLocalStorage();
  }



}
