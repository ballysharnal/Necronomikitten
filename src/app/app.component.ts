import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kittenProject';
  booleanRoute = false;
  urlLogo = "https://spng.pngfly.com/20180714/yyz/kisspng-the-call-of-cthulhu-mitos-de-cthulhu-los-cthulhu-cthulhu-silhouette-5b4a0bfe1af770.8031446715315793901105.jpg"
  constructor() {}

  invertBooleanRoute() {
    if (this.booleanRoute == false) {
      this.booleanRoute = true;
    } else {
      this.booleanRoute = false;
    }
  }
}
