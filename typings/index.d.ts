import ProcessorBase, { IProcessor, IProcessorType } from "./ProcessorBase";
export { ProcessorBase, IProcessorType };
export declare type IMappingProcessor<T = typeof ProcessorBase> = IProcessorType<T extends typeof ProcessorBase ? T : any>;
export default class TypeProcessor<IReturn = any> {
    /**
     * 重写类型映射
     */
    protected processorsMapping: Record<number | string, IProcessorType<typeof ProcessorBase>>;
    /**
     * 覆盖老的映射关系或者新增映射关系
     */
    protected moreProcessorsMapping: Record<number | string, IProcessorType<typeof ProcessorBase>>;
    private currentElement;
    private updateTypeMapping;
    getCurrentElement(): string | number;
    setCurrentElement(val: number | string): void;
    getActor(params?: any): IProcessor<IReturn> | undefined;
}
