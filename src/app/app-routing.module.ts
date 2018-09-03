import { SearchComponent } from './pages/search/search.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';


const app_routes: Routes = [

  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
    imports: [
      RouterModule.forRoot( app_routes )
    ],
    exports: [
      RouterModule
    ]

})
export class AppRoutingModule {

}
