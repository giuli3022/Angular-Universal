// Angular imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// This Module Imports
// Shared Imports
import { MaterialModule } from '@shared/modules'
import { ComponentsModule } from '../components/components.module'

@NgModule({
	declarations: [],
	imports: [CommonModule, ReactiveFormsModule, MaterialModule, ComponentsModule],
})
export class HomeModule {}
