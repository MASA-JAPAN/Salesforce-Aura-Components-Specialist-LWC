/* eslint-disable no-console */
import { LightningElement, track, wire } from "lwc";
import { registerListener } from "c/pubsub";
import { CurrentPageReference, NavigationMixin } from "lightning/navigation";

export default class BoatDetail extends NavigationMixin(LightningElement) {
  @wire(CurrentPageReference) pageRef;
  @track boatId = null;
  @track boatName = null;
  @track boatTypeName = null;
  @track boatLength = null;
  @track boatPrice = null;
  @track boatDescription = null;
  @track boatPicture = null;

  get backgroundImage() {
    return `background-image:url(${this.boatPicture})`;
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
    this.boatPicture = boat.Picture__c;
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
