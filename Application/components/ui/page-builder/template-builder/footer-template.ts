import PageBuilder from "..";

export default class PageBuilderFooter extends PageBuilder {
  public footer: React.ReactNode;
  constructor() {
    super();
  }
  setFooter(component: React.ReactNode) {
    this.footer = component;
  }
  getFooter() {
    return this.footer;
  }
}
