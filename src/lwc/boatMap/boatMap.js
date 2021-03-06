/* eslint-disable no-console */
import { LightningElement, track, wire } from "lwc";
import { registerListener } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";

export default class BoatMap extends LightningElement {
  @wire(CurrentPageReference) pageRef;
  @track boatLatitude = null;
  @track boatLongitude = null;
  @track mapMarkers = null;

  connectedCallback() {
    // subscribe to searchKeyChange event
    registerListener("selectedBoat", this.handleSelected, this);
  }

  handleSelected(boat) {
    this.mapMarkers = [
      {
        location: {
          Latitude: boat.Geolocation__Latitude__s,
          Longitude: boat.Geolocation__Longitude__s
        }
      }
    ];
  }
}
