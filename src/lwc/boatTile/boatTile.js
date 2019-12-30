/* eslint-disable no-console */
import { LightningElement, track, api, wire } from "lwc";
import { fireEvent } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";

export default class BoatTile extends LightningElement {
  @track boat = null;
  @track boatId = null;
  @track boatContactName = null;
  @track boatPicture = null;

  @wire(CurrentPageReference) pageRef;

  @api
  set searchedBoat(value) {
    this.boat = value;
    this.boatContactName = value.Contact__r.Name;
    this.boatPicture = value.Picture__c;
  }
  get searchedBoat() {
    return this.boat;
  }

  get backgroundStyle() {
    return `background-image:url(${this.boatPicture})`;
  }

  handleSelect(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("selected", { detail: this.boat.Id }));
    fireEvent(this.pageRef, "selectedBoat", this.boat);
  }
}
