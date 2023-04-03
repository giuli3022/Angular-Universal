// Angular imports
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { ContactComponent, ExperienceComponent, HeroComponent } from './sections'

const sections: any[] = [HeroComponent, ExperienceComponent, ContactComponent]
@NgModule({
	declarations: [...sections, HomeComponent],
	imports: [CommonModule],
})
export class HomeModule {}
