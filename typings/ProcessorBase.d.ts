export interface IProcessor<IReturn = any> {
    getData(): IReturn;
    process(): IReturn | Promise<IReturn>;
}
export default abstract class ProcessorBase implements IProcessor {
    protected constructor(_params?: any);
    abstract getData(): any;
    abstract process(): any;
}
