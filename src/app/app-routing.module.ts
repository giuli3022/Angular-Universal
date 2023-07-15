// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Angular Components
import { HomeComponent } from './modules/home/home.component'
import { ContactComponent } from './modules/contact/contact.component'
import { ProjectsComponent } from './modules/projects/projects.component'
import { AboutComponent } from './modules/about/about.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'HomeComponent',
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'projects',
		component: ProjectsComponent,
	},
	{
		path: 'contact',
		component: ContactComponent,
	},
]


@NgModule({
	imports: [
	  RouterModule.forRoot(
		routes,
		{
		  enableTracing: false,
		}
	  )
	],
	exports: [
	  RouterModule
	]
  })
  
  
export class AppRoutingModule {}

