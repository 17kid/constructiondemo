import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MissionComponent } from './mission/mission.component';
import { ServicesComponent } from './services/services.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [

  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'mission',
    component: MissionComponent,
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
