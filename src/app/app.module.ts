import { NgModule } from '@angular/core';


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk';

import { AppComponent } from './app.component';
import { DocComponent } from './doc/doc.component'; 
import { RouterModule }   from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { OffreDeFormationComponent } from './offre-de-formation/offre-de-formation.component';
import { EleveComponent } from './eleve/eleve.component';
import { AutreOptionComponent } from './autre-option/autre-option.component';
import { HomeComponent } from './home/home.component';

@NgModule({

    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'general',
        component: GeneralComponent
      },
      {
        path: 'gestionUtilisateur',
        component: GestionUtilisateurComponent
      },
      {
        path: 'offre',
        component: OffreDeFormationComponent
      },
      {
        path: 'eleve',
        component: EleveComponent 
      },
      {
        path: 'doc',
        component: DocComponent 
      },
    ])
  ],
  declarations: [
    AppComponent,
    DocComponent,
    GeneralComponent,
    GestionUtilisateurComponent,
    OffreDeFormationComponent,
    EleveComponent,
    AutreOptionComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
  