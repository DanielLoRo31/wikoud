import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-process-section',
  templateUrl: './process-section.component.html',
  styleUrls: ['./process-section.component.scss']
})
export class ProcessSectionComponent implements OnInit {
  ASSETS = environment.ASSETS_URL;
  constructor() { }

  ngOnInit(): void {
  }

}
