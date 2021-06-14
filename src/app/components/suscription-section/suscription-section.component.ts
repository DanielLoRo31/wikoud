import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suscription-section',
  templateUrl: './suscription-section.component.html',
  styleUrls: ['./suscription-section.component.scss']
})
export class SuscriptionSectionComponent implements OnInit {

  formGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
    })
  }

  submit() {
    if (this.formGroup.valid) {
      
    }
  }
}
