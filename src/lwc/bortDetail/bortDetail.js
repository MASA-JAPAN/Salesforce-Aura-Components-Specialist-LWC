/* eslint-disable no-console */
import { LightningElement, track, wire } from "lwc";
import { registerListener, unregisterAllListeners } from "c/pubsub";
import { CurrentPageReference, NavigationMixin } from "lightning/navigation";

export default class BortDetail extends NavigationMixin(LightningElement) {
  @wire(CurrentPageReference) pageRef;
  @track boatId = "";
  @track boatName = "test";
  @track boatTypeName = "test";
  @track boatLength = 5;
  @track boatPrice = 5;
  @track boatDescription = "test";
  @track bortPicture = "";

  get backgroundImage() {
    return `background-image:url(${this.bortPicture})`;
  }

  connectedCallback() {
    // subscribe to searchKeyChange event
    registerListener("selectedBoat", this.handleSelected, this);
  }

  handleSelected(boat) {
    this.boatId = boat.Id;
    this.boatName = boat.Name;
    this.boatTypeName = boat.BoatType__r.Name;
    this.boatLength = boat.Length__c;
    this.boatPrice = boat.Price__c;
    this.boatDescription = boat.Description__c;
    this.bortPicture = boat.Picture__c;
  }
  handleClick() {
    console.log("a");

    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.boatId,
        objectApiName: "Boat__c",
        actionName: "view"
      }
    });
  }
}
