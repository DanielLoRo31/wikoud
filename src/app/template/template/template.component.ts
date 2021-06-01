import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
