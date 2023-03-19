import { Component } from '@angular/core'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	skills : Skill[] = [
		{
			name: 'HTML',
			img: '/assets/images/icons/html-5.png',
		},
		{
			name: 'CSS',
			img: '/assets/images/icons/css-3.png',
		},
		{
			name: 'Sass',
			img: '/assets/images/icons/sass.png',
		},
		{
			name: 'Bootstrap',
			img: '/assets/images/icons/bootstrap.png',
		},
		{
			name: 'Javascript',
			img: '/assets/images/icons/javascript.png',
		},
		{
			name: 'Angular',
			img: '/assets/images/icons/angular-js.png',
		},
		{
			name: 'React',
			img: '/assets/images/icons/react.png',
		},
		{
			name: 'Ionic',
			img: '/assets/images/icons/ionic.png',
		},
		{
			name: 'GitHub',
			img: '/assets/images/icons/github.png',
		},
	]

	constructor() {}

}
interface Skill {
	name: string;
	img: string;
}
