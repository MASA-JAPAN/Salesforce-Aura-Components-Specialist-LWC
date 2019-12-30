/* eslint-disable no-console */
import { LightningElement, track, api } from "lwc";

export default class BortSearchResults extends LightningElement {
  @track borts = null;
  @track selectedBortId;

  @api
  set searchedBorts(value) {
    this.borts = value;
  }
  get searchedBorts() {
    return this.borts;
  }

  get foundBoats() {
    if (this.borts == null) {
      return false;
    }

    return this.borts.length > 0;
  }
}
