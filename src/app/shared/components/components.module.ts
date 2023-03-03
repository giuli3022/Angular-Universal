// Angular Imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// Shared Imports
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'

// const components = [CustomSnackbarComponent]
const components: any[] = [NavbarComponent, FooterComponent]

@NgModule({
	declarations: [...components],
	imports: [CommonModule, ReactiveFormsModule],
	exports: [...components],
})
export class ComponentsModule {}
