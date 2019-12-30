import { LightningElement, track } from "lwc";

export default class BoatSearch extends LightningElement {
  @track searchedBoats;

  handleSearched(e) {
    this.searchedBoats = e.detail;
  }
}
