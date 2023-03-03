// Angular imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
// This Module Imports
// Shared Imports
import { MaterialModule } from '@shared/modules'
import { HeroComponent } from '@home/sections'
import { ExperienceComponent } from '@home/sections'
import { ContactComponent } from '@home/sections'

const views: any[] = [HeroComponent, ExperienceComponent, ContactComponent]
@NgModule({
	declarations: [...views],
	imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class HomeModule {}
