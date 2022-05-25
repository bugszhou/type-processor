/* eslint-disable @typescript-eslint/no-unused-vars */
export interface IProcessor<IReturn = any> {
  getData(): IReturn;
  process(): IReturn | Promise<IReturn>;
}

abstract class ProcessorBase implements IProcessor {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(opts?: any) {}

  abstract getData(): any;
  abstract process(): any;
}

export type IProcessorType<T extends abstract new (...opts: any[]) => any> = {
  new (...opts: any[]): InstanceType<T>;
};

export default ProcessorBase;
