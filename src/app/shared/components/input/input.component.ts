import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {

  @Input() public isDisabled?: boolean;
  @Input() public isPrice: boolean;
  @Input() public id = 'rafa';
  @Input() public label = 'Label';
  @Input() public placeholder = 'palce';
  @Input() public complete = false;
  @Input() public invalid = true;


  public dataValue = '';

  public onChange: (_: string) => void = () => {};
  public onTouched: (_: string) => void = () => {};

  get value() {
    return this.dataValue;
  }

  set value(data: string) {
    if (data !== this.dataValue) {
      this.onChange(data);
    }
  }

  writeValue(obj: (value: string) => void): void {
    this.onChange = obj;
  }

  registerOnChange(obj: (value: string) => void): void {
    this.onChange = obj;
  }

  registerOnTouched(fn: (value: string) => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
