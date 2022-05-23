import ProcessorBase, { IProcessor } from "./ProcessorBase";

export { ProcessorBase };

export default class TypeProcessor<IReturn = any> {
  /**
   * 重写类型映射
   */
  protected processorsMapping: Record<number | string, typeof ProcessorBase> =
    {};

  /**
   * 覆盖老的映射关系或者新增映射关系
   */
  protected moreProcessorsMapping: Record<
    number | string,
    typeof ProcessorBase
  > = {};

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
      const actor = new (this.processorsMapping[
        this.getCurrentElement()
      ] as any)(params);

      if (!actor) {
        return;
      }

      return actor;
    } catch (e) {
      console.error(e);
      return;
    }
  }
}
