export default class View {
  targetElement = ''; //placeholder target element to deploy the generatehtml
  render(data) {
    //general function for all views to render the html data
    const html = this.generateHtml(data);

    this.targetElement.insertAdjacentHTML('afterbegin', html);
  }

  generateHtml(data) {
    //placeholder method common to all views
    return data;
  }
}
