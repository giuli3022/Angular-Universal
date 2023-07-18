import { Component } from '@angular/core'
import { Router } from '@angular/router';


@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
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
