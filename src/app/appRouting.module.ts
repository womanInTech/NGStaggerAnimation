import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

const routes:Routes=[
  {path:"home", component: HomeComponent, data:{state:"homestate"}},
  {path:"about", component:AboutComponent, data:{state:"aboutstate"}},
  {path:"**",component:HomeComponent }

]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class AppRoutingModule{}
