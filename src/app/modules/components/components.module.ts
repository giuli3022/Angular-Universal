// Angular imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// This Module Imports
// Shared Imports
import { MaterialModule } from '@shared/modules'
import { NavbarComponent } from '@modules/components'
import { FooterComponent } from '@modules/components'

@NgModule({
	declarations: [],
	imports: [CommonModule, ReactiveFormsModule, MaterialModule],
	exports: [NavbarComponent, FooterComponent],
})
export class ComponentsModule {}
