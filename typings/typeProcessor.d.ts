import ProcessorBase, { IProcessor } from "./ProcessorBase";
export default class TypeProcessor {
    protected processorsMapping: Record<number | string, typeof ProcessorBase>;
    /**
     * 覆盖老的映射关系或者新增映射关系
     */
    protected moreProcessorsMapping: Record<number | string, typeof ProcessorBase>;
    private currentElement;
    private updateTypeMapping;
    getCurrentElement(): string | number;
    setCurrentElement(val: number | string): void;
    getActor<IReturnType = any>(params?: any): IProcessor<IReturnType> | undefined;
}
