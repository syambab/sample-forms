import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResloginComponent } from './reslogin/reslogin.component';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { OnlyalphabetDirective } from './onlyalphabet.directive';
import { MouseHoverDirective } from './mouse-hover.directive';
import { ArrayComponent } from './array/array.component';

@NgModule({
  declarations: [
    AppComponent,
    ResloginComponent,
    OnlyNumbersDirective,
    OnlyalphabetDirective,
    MouseHoverDirective,
    ArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
