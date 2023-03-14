// Angular imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

// Shared Imports
import { SectionsModule } from './sections/sections.module'

@NgModule({
	declarations: [],
	imports: [CommonModule, ReactiveFormsModule, SectionsModule],
})
export class HomeModule {}
