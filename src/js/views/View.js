export default class View {
  targetElement = ''; //placeholder target element to deploy the generatehtml
  url;
  render(data) {
    //general function for all views to render the html data

    const html = this.generateHtml(data);
    this.clearHtml();
    this.targetElement.insertAdjacentHTML('afterbegin', html);
  }
  clearHtml() {
    this.targetElement.innerHTML = '';
  }

  generateHtml(data) {
    //placeholder method common to all views
    return data;
  }
}
