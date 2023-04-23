import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewComponent } from "./new.component";
import { InputMaskModule } from "@ectuser/input-mask-test";
import { AsyncPipe } from "@angular/common";

const routes: Routes = [
  {component: NewComponent, path: ''}
];

@NgModule({
  imports: [InputMaskModule, RouterModule.forChild(routes), AsyncPipe],
  declarations: [NewComponent]
})
export class NewModule {}
