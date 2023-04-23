import { Component } from "@angular/core";
import { createMask } from "@ngneat/input-mask";

@Component({
  template: `<div>
    Base

    <input
      [inputMask]="mask"
      placeholder="dd/mm/yyyy"
    />
  </div>`
})
export class BaseComponent {
  mask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd/mm/yyyy',
    parser: (value: string) => {
      const values = value.split('/');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(year, month, date);
    },
  });
}
