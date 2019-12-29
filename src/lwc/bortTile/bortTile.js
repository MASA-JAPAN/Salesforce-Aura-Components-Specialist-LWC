/* eslint-disable no-console */
import { LightningElement, track, api } from "lwc";

export default class BortTile extends LightningElement {
  @track bort;
  @track bortId = "";
  @track bortContactName = "";
  @track bortPicture = "";

  @api
  set searchedBort(value) {
    console.log(value);

    this.bort = value;
    this.bortContactName = value.Contact__r.Name;
    this.bortPicture = value.Picture__c;
  }
  get searchedBort() {
    return this.bort;
  }

  get backgroundStyle() {
    return `background-image:url(${this.bortPicture})`;
  }

  handleClick(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("selected", { detail: this.bort.Id }));
  }
}
