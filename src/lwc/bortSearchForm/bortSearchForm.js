/* eslint-disable no-console */
import { LightningElement, api, wire, track } from "lwc";
import getBoatTypes from "@salesforce/apex/BoatSearchFormController.getBoatTypes";

import FIELD_Name from "@salesforce/schema/Boat__c.Name";
import FIELD_Year_Built__c from "@salesforce/schema/Boat__c.Year_Built__c";
import FIELD_Price__c from "@salesforce/schema/Boat__c.Price__c";
import FIELD_Picture__c from "@salesforce/schema/Boat__c.Picture__c";
import FIELD_Length__c from "@salesforce/schema/Boat__c.Length__c";
import FIELD_Geolocation__c from "@salesforce/schema/Boat__c.Geolocation__c";
import FIELD_Description__c from "@salesforce/schema/Boat__c.Description__c";
import FIELD_BoatType__c from "@salesforce/schema/Boat__c.BoatType__c";
import FIELD_Contact__c from "@salesforce/schema/Boat__c.Contact__c";
import getBoats from "@salesforce/apex/BoatSearchFormController.getBoats";

import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class BortSearchForm extends LightningElement {
  @api horizontalAlign = "center";
  @track bortTypes;
  @track error;
  @track isShowModal = false;
  @track selectedType = "";

  createFields = [
    FIELD_Name,
    FIELD_Year_Built__c,
    FIELD_Price__c,
    FIELD_Picture__c,
    FIELD_Length__c,
    FIELD_Geolocation__c,
    FIELD_Description__c,
    FIELD_BoatType__c,
    FIELD_Contact__c
  ];

  @wire(getBoatTypes)
  wiredContacts({ error, data }) {
    if (data) {
      this.bortTypes = data;
      this.error = undefined;
      console.log("this.bortTypes[0]" + this.bortTypes[0].Id);
    } else if (error) {
      this.error = error;
      this.bortTypes = undefined;
    }
  }

  openModal() {
    this.isShowModal = true;
  }
  closeModal() {
    this.isShowModal = false;
  }
  onSuccess(event) {
    const bort = event.detail;
    console.log(JSON.stringify(bort));
    this.isShowModal = false;
    this.showToast("SUCCESS", "Success", "success", "pester");
  }

  showToast(title, message, varient, mode) {
    const event = new ShowToastEvent({
      title: title,
      message: message,
      variant: varient,
      mode: mode
    });
    this.dispatchEvent(event);
  }

  handleChange(e) {
    this.selectedType = e.target.value;
    console.log(this.selectedType);
  }

  handleSearch(e) {
    getBoats({ boatTypeId: this.selectedType })
      .then(result => {
        e.preventDefault();
        this.dispatchEvent(new CustomEvent("searched", { detail: result }));
      })
      .catch(error => {
        this.error = error;
        console.log(error);
      });
  }
}
