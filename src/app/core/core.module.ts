import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UpdatesNotificationComponent } from './components/updates-notification/updates-notification.component';
import { IonicModule } from '@ionic/angular';
import { DemoModalComponent } from './components/demo-modal/demo-modal.component';
import { TokenInterceptor } from './services/token-interceptor.service';

const COMPONENTS = [
  UpdatesNotificationComponent,
  DemoModalComponent
];
const ENTRY_COMPONENTS = [
  DemoModalComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    IonicModule
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  exports: [
    ...COMPONENTS,
    ...ENTRY_COMPONENTS
  ]
})
export class CoreModule { }
