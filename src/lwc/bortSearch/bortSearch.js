import { LightningElement, track } from "lwc";

export default class BortSearch extends LightningElement {
  @track searchedBorts;

  handleSearched(e) {
    this.searchedBorts = e.detail;
  }
}
