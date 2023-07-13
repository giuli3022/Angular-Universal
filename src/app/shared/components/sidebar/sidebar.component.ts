import { Component } from '@angular/core'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
	isSidebarOpen = false;
	constructor() { }

	toggleSidebar() {
		this.isSidebarOpen = !this.isSidebarOpen;
		if (this.isSidebarOpen) {
			let sidebar = document.querySelector('.sidebar') as HTMLElement;
			if (sidebar) {
				sidebar.style.display = 'block'
			}
		} else {
			let sidebar = document.querySelector('.sidebar') as HTMLElement;
			if (sidebar) {
				sidebar.style.display = 'none'
			}
		}
	}
}
