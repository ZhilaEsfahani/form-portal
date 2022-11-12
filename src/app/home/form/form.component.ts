import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  calculateForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    year: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    plan: new FormControl(null),
    group: new FormControl(null),
    type: new FormControl(null, [Validators.required]),
    zone: new FormControl(null, [Validators.required]),
    organization: new FormControl(null),
    responsible: new FormControl(null, [Validators.required]),
    beneficiary: new FormControl(null),
    dimension: new FormControl(null, [Validators.required]),
    grouping: new FormControl(null),
    path: new FormControl(null),
    status: new FormControl(null),
    description: new FormControl(null),
  });

  constructor() { }

  ngOnInit() {
  }

  get controls() {
    return this.calculateForm.controls;
  }

}
