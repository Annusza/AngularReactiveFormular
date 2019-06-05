import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { /*FormsModule,*/ ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FormularComponent } from "./formular/formular.component";
import { AppRoutingModule } from "./app.routing.module";
import { ReactiveFormComponent } from "./formular/reactive-form/reactive-form.component";

@NgModule({
  declarations: [AppComponent, FormularComponent, ReactiveFormComponent],
  imports: [BrowserModule, AppRoutingModule, /*FormsModule,*/ ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
