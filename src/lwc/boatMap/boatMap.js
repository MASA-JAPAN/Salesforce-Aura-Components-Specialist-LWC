/* eslint-disable no-console */
import { LightningElement, track, wire } from "lwc";
import { registerListener, unregisterAllListeners } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";

export default class BoatMap extends LightningElement {
  @wire(CurrentPageReference) pageRef;
  @track boatLatitude = 25.0831569;
  @track boatLongitude = -77.3248236;
  @track mapMarkers = [];

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
        },

        title: "The White House",
        description:
          "Landmark, historic home & office of the United States president, with tours for visitors."
      }
    ];
  }
}
