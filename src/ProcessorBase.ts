export interface IProcessor<IReturn = any> {
  getData(): IReturn;
  process(): IReturn | Promise<IReturn>;
}

export default abstract class ProcessorBase implements IProcessor {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected constructor(_params?: any) {
    //
  }
  abstract getData(): any;
  abstract process(): any;
}
