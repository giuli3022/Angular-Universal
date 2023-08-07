// Angular Imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

// Shared Imports
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'

const components: any[] = [NavbarComponent, FooterComponent, SidebarComponent]

@NgModule({
	declarations: [...components],
	imports: [CommonModule, ReactiveFormsModule, RouterModule],
	exports: [...components],
})
export class ComponentsModule {}
