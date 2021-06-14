import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.scss'],
})
export class TechnologiesSectionComponent implements OnInit {
  ASSETS = environment.ASSETS_URL;
  items: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { img: this.ASSETS + '/img/technologies/android.png' },
      { img: this.ASSETS + '/img/technologies/angular.png' },
      { img: this.ASSETS + '/img/technologies/aws.png' },
      { img: this.ASSETS + '/img/technologies/bootstrap.png' },
      { img: this.ASSETS + '/img/technologies/css.png' },
      { img: this.ASSETS + '/img/technologies/js.png' },
      { img: this.ASSETS + '/img/technologies/html.png' },
      { img: this.ASSETS + '/img/technologies/electron.png' },
      { img: this.ASSETS + '/img/technologies/express.png' },
      { img: this.ASSETS + '/img/technologies/firebase.png' },
      { img: this.ASSETS + '/img/technologies/flutter.png' },
      { img: this.ASSETS + '/img/technologies/git.png' },
      { img: this.ASSETS + '/img/technologies/mongo.png' },
      { img: this.ASSETS + '/img/technologies/mysql.png' },
      { img: this.ASSETS + '/img/technologies/node.png' },
      { img: this.ASSETS + '/img/technologies/php.png' },
      { img: this.ASSETS + '/img/technologies/ps.png' },
      { img: this.ASSETS + '/img/technologies/xd.png' },
      { img: this.ASSETS + '/img/technologies/react.png' },
      { img: this.ASSETS + '/img/technologies/xcode.png' },
    ];
  }
}
