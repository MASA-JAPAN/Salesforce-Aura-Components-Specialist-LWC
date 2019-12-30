/* eslint-disable no-console */
import { LightningElement, track, api } from "lwc";

export default class BoatSearchResults extends LightningElement {
  @track boats = null;
  @track selectedboatId;

  @api
  set searchedBoats(value) {
    this.boats = value;
  }
  get searchedBoats() {
    return this.boats;
  }

  get foundBoats() {
    if (this.boats == null) {
      return false;
    }

    return this.boats.length > 0;
  }
}
