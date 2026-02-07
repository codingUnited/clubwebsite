export default class PageBuilder {
  private title = "";
  private description = "";
  constructor() {}
  getTitle() {
    return this.title;
  }
  setTitle(title: string) {
    this.title = title;
  }
  getDescription() {
    return this.description;
  }
  setDescription(description: string) {
    this.description = description;
  }
}
