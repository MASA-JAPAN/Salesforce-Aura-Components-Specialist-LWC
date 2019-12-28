/* eslint-disable no-console */
import { LightningElement, track, api } from "lwc";

export default class BortTile extends LightningElement {
  @track bort = "{Picture__c: }";

  @api
  set searchedBort(value) {
    console.log(value);

    this.bort = value;
  }
  get searchedBort() {
    return this.bort;
  }

  get backgroundStyle() {
    return `background-image:url(${this.bort.Picture__c})`;
  }
}
