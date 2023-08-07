import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
	routes: Route[] = [
		{
			label: '/ Home',
			url: '/home',
		},
		{
			label: '/ About',
			url: '/about',
		},
		{
			label: '/ Projects',
			url: '/projects',
		},
		{
			label: '/ Contact',
			url: '/contact',
		},
	]

	socialMedias: SocialMedia[] = [
		{
			label: 'instagram',
			src: '/assets/images/socialmedia/instagram.svg',
			url: 'https://www.youtube.com/',
		},
		{
			label: 'tiktok',
			src: '/assets/images/socialmedia/tiktok.svg',
			url: 'https://www.youtube.com/',
		},
		{
			label: 'twitter',
			src: '/assets/images/socialmedia/twitter.svg',
			url: 'https://www.youtube.com/',
		},
		{
			label: 'youtube',
			src: '/assets/images/socialmedia/youtube.svg',
			url: 'https://www.youtube.com/',
		},
	]
	isSidebarOpen = false
	constructor() {}

	toggleSidebar() {
		this.isSidebarOpen = !this.isSidebarOpen
		if (this.isSidebarOpen) {
			let brand = document.querySelector('.navbar-brand') as HTMLElement
			let sidebar = document.querySelector('.sidebar') as HTMLElement
			if (sidebar) {
				sidebar.style.display = 'block'
				brand.style.color = '#EFEFEF'
			}
		} else {
			let brand = document.querySelector('.navbar-brand') as HTMLElement
			let sidebar = document.querySelector('.sidebar') as HTMLElement
			if (sidebar) {
				sidebar.style.display = 'none'
				brand.style.color = '#032539'
			}
		}
	}
}

interface Route {
	label: string
	url: string
}

interface SocialMedia {
	label: string
	src: string
	url: string
}
