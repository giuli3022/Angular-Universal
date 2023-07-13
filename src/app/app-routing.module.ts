// Angular Imports
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
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
		redirectTo: '',
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
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabledBlocking',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
