import PageBuilder from "..";

export default class PageBuilderHeader extends PageBuilder {
  public header: React.ReactNode;
  constructor() {
    super();
  }
  setHeader(component: React.ReactNode) {
    this.header = component;
  }
  getHeader() {
    return this.header;
  }
}
