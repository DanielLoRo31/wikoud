import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.scss'],
})
export class TeamSectionComponent implements OnInit {
  items = [
    {
      name: 'Fabricio Zacarías',
      job: 'CEO',
      img: '../../../assets/img/fabricio.jpg',
    },
    {
      name: 'Daniel Lozano',
      job: 'CEO',
      img: '../../../assets/img/daniel.jpg',
    },
    {
      name: 'Javier Hernández',
      job: 'CEO',
      img: '../../../assets/img/javier.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
