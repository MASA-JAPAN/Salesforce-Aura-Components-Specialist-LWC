/* eslint-disable no-console */
import { LightningElement, track, api, wire } from "lwc";
import { fireEvent } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";

export default class BortTile extends LightningElement {
  @track bort;
  @track bortId = "";
  @track bortContactName = "";
  @track bortPicture = "";

  @wire(CurrentPageReference) pageRef;

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

  handleSelect(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("selected", { detail: this.bort.Id }));
    fireEvent(this.pageRef, "selectedBoat", this.bort);
    console.log(this.bort);
  }
}
