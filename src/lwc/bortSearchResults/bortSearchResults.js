import { LightningElement, track, api } from "lwc";

export default class BortSearchResults extends LightningElement {
  @track borts;

  @api
  set searchedBorts(value) {
    this.borts = value;
  }
  get searchedBorts() {
    return this.borts;
  }
}