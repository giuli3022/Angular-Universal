// Angular Imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from '@environment'
// This Module Imports
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
// Shared Imports
import { ComponentsModule } from '@shared/components'

// Store Imports
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HomeModule } from './modules'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		AppRoutingModule,
		HomeModule,
		ComponentsModule,
		// Store (NGRX)
		StoreDevtoolsModule.instrument({
			name: 'Angular Template Store',
			maxAge: 25,
			logOnly: environment.production,
			autoPause: true,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
