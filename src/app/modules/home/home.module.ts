// Angular imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// This Module Imports
// Shared Imports
import { MaterialModule } from '@shared/modules'
import { ComponentsModule } from '../components/components.module'
import { HeroComponent } from './sections/hero/hero.component'
import { ExperienceComponent } from './sections/experience/experience.component'
import { ContactComponent } from './sections/contact/contact.component'

@NgModule({
	declarations: [HeroComponent, ExperienceComponent, ContactComponent],
	imports: [CommonModule, ReactiveFormsModule, MaterialModule, ComponentsModule],
})
export class HomeModule {}
