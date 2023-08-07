import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './project/project.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    declarations: [
        ProjectComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule
    ],
})
export default class ProjectsModule { }
