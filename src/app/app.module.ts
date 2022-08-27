import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { LifeCycleComponent } from './app.component.lifecycle';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomstyleDirective } from './customstyle.directive';
import { PipeComponent } from './pipe/pipe.component';
import { DigitcountPipe } from './digitcount.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    LifeCycleComponent,
    DirectivedemoComponent,
    MovieComponent,
    TestComponent,
    CustomstyleDirective,
    PipeComponent,
    DigitcountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
