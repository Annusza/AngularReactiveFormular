import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";
import { FormularComponent } from "./formular/formular.component";

const appRoutes: Routes = [
  {
    path: "formular",
    component: FormularComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
