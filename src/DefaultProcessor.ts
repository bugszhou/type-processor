import ProcessorBase from "./ProcessorBase";

export default class DefaultProcessor implements ProcessorBase {
  private elementData = null;

  constructor(options: any) {
    this.elementData = options;
  }

  getData() {
    return this.elementData;
  }

  process() {
    console.error(`No Processor, currentElement is ${this.getData()}`);
  }
}
