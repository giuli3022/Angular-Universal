// Angular Imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// Shared Imports
import { MaterialModule } from '@shared/modules'
// This Module Imports
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { FooterComponent } from '../../components/footer/footer.component'

const components: any[] = [NavbarComponent, FooterComponent]
@NgModule({
	declarations: [...components],
	imports: [CommonModule, ReactiveFormsModule, MaterialModule],
	exports: [],
})
export class ComponentsModule {}
