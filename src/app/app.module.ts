// Angular Imports
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from '@environment'
// This Module Imports
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
// Shared Imports

// Store Imports
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { reducers, metaReducers } from '@store/reducers'
import { effects } from '@store/effects'
import { HomeModule } from './modules'
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		AppRoutingModule,
		HomeModule,
		// Store (NGRX)
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot(effects),
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
