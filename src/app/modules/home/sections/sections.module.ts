// Angular Imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// Shared Imports
import { HeroComponent } from './hero/hero.component'
import { ExperienceComponent } from './experience/experience.component'
import { ContactComponent } from './contact/contact.component'

const sections: any[] = [HeroComponent, ExperienceComponent, ContactComponent]

@NgModule({
	declarations: [...sections],
	imports: [CommonModule, ReactiveFormsModule, ],
	exports: [...sections],
})
export class SectionsModule {}
