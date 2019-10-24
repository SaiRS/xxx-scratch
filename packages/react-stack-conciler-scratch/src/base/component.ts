import { Element } from './element-type';

/* eslint-disable unicorn/prevent-abbreviations, compat/compat, @typescript-eslint/no-explicit-any */
const componentSymbol = Symbol('component');
/**
 * 基础的Component
 * @export
 * @class Component
 */
export class Component {
  static __component__ = componentSymbol;
  /**
   * 用来标记是否是Component
   * @static
   * @returns {boolean} true表示是Component
   * @memberof Component
   */
  static isComponent(): boolean {
    return this.__component__ === componentSymbol;
  }

  props: any;
  /**
   *  Creates an instance of Component.
   * @param {*} props props
   * @memberof Component
   */
  constructor(props: any) {
    this.props = props;
  }

  /**
   * 渲染函数，返回该组件的Element
   * @returns {Element} Element
   * @memberof Component
   */
  render(): Element {
    throw new Error('子类继承');
  }
}

/* eslint-enable */
