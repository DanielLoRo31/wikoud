import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-suscription-section',
  templateUrl: './suscription-section.component.html',
  styleUrls: ['./suscription-section.component.scss']
})
export class SuscriptionSectionComponent implements OnInit {

  ASSETS = environment.ASSETS_URL;

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

  submit($event) {
    if (this.formGroup.valid) {
      setTimeout(()=> {
        this.formGroup.reset()
      }, 500)
      // console.log(this.formGroup.value)
    }
  }
}
