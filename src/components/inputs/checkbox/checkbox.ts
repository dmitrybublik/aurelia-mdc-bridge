import { IMdcCheckboxEvent } from '../../../bridge/index';
export class Checkbox {
  private eventCounter = 0;
  private isChecked: boolean;

  private onChange(event: IMdcCheckboxEvent) {
    this.isChecked = event.detail;
    this.eventCounter++;
  }
}
