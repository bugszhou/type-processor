export interface IProcessor<IReturn = any> {
    getData(): IReturn;
    process(): IReturn | Promise<IReturn>;
}
declare abstract class ProcessorBase implements IProcessor {
    constructor(opts?: any);
    abstract getData(): any;
    abstract process(): any;
}
export declare type IProcessorType<T extends abstract new (...opts: any[]) => any> = {
    new (...opts: any[]): InstanceType<T>;
};
export default ProcessorBase;
