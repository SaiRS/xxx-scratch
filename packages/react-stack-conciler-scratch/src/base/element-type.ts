import { Component } from './component';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * function类型的Element
 * @export
 * @interface ElementFunc
 */
export interface ElementFunc {
  (props: any): Element;
}

/**
 * Element定义
 * @export
 * @interface Element
 */
export interface Element {
  type: string | ElementFunc | typeof Component;
  props: Record<string, any> & {
    children?: (Element | string)[];
  };
}

/**
 * 是否是宿主元素
 * @export
 * @param {*} type 待验证的element
 * @returns {boolean} true表示是宿主元素
 */
export function isHostElement(type: any): boolean {
  return typeof type === 'string';
}

/**
 * 是否是Component
 * @export
 * @param {*} type 待验证的type
 * @returns {boolean} true表示是Component
 */
export function isComponentElement(type: any): boolean {
  return type && typeof type.isComponent === 'function' && type.isComponent();
}

/**
 * 是否是function类型的element
 * @export
 * @param {*} type 待验证的element
 * @returns {boolean} true表示是function类型的element
 */
export function isFunctionElement(type: any): boolean {
  return typeof type === 'function';
}

/* eslint-enable */
