import DefaultProcessor from "./DefaultProcessor";
import ProcessorBase, { IProcessor, IProcessorType } from "./ProcessorBase";

export { ProcessorBase, IProcessorType };

export type IMappingProcessor<T = typeof ProcessorBase> = IProcessorType<
  T extends typeof ProcessorBase ? T : any
>;

export default class TypeProcessor<IReturn = any> {
  /**
   * 重写类型映射
   */
  protected processorsMapping: Record<number | string, IMappingProcessor> = {};

  /**
   * 覆盖老的映射关系或者新增映射关系
   */
  protected moreProcessorsMapping: Record<number | string, IMappingProcessor> =
    {};

  private currentElement: string | number = "";

  private updateTypeMapping() {
    if (!this.processorsMapping) {
      this.processorsMapping = {};
    }
    this.processorsMapping = {
      ...this.processorsMapping,
      ...this.moreProcessorsMapping,
    };
  }

  getCurrentElement() {
    return this.currentElement;
  }

  setCurrentElement(val: number | string) {
    this.currentElement = val;
  }

  getActor(params?: any): IProcessor<IReturn> | undefined {
    this.updateTypeMapping();
    try {
      const Actor =
        this.processorsMapping[this.getCurrentElement()] || DefaultProcessor;

      if (!Actor) {
        return;
      }

      const actor = new Actor(params);

      return actor;
    } catch (e) {
      console.error(e);
      return;
    }
  }
}
