import { NgModule } from "@angular/core";
import { InputMaskModule } from "@ngneat/input-mask";
import { BaseComponent } from "./base.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {component: BaseComponent, path: ''}
];

@NgModule({
  imports: [InputMaskModule, RouterModule.forChild(routes)],
  declarations: [BaseComponent]
})
export class BaseModule {}
