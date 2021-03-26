import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {routerTransition} from "./router-animations";
//RouterOUtlet is the exported class whose selecter is "route-outlet"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[routerTransition]
})
export class AppComponent {
  title = 'staggerNgAnimationExample';
  getState(outlet:RouterOutlet){
    return outlet.activatedRouteData.state;

  }
}
