/* eslint-disable unicorn/prevent-abbreviations, @typescript-eslint/no-use-before-define, @typescript-eslint/ban-ts-ignore */
import {
  isHostElement,
  Element,
  isComponentElement,
  ElementFunc,
} from '../base/element-type';
import { Component } from '../base/component';

// 目标：能挂载，并渲染出来

/**
 * 挂载宿主元素
 * @param {Element} element element描述对象
 * @returns {HTMLElement} 生成的宿主元素
 */
function mountHostElement(element: Element): HTMLElement {
  const type = element.type as string;
  const props = element.props;

  const htmlEle: HTMLElement = document.createElement(type);
  // 设置属性
  for (const key of Object.keys(props)) {
    if (key !== 'children') {
      htmlEle.setAttribute(key, props[key]);
    }
  }

  // 处理children
  let children = props.children || [];
  if (!Array.isArray(children)) {
    // @ts-ignore
    children = [children];
  }

  for (const child of children) {
    if (typeof child === 'string') {
      htmlEle.append(child);
    } else {
      const childHtmlElement = mount(child);
      htmlEle.append(childHtmlElement);
    }
  }

  return htmlEle;
}

/**
 * 挂载组件元素
 * @param {Element} element 组件元素
 * @returns {Element} 渲染后的元素
 */
function mountComponent(element: Element): HTMLElement {
  const type = element.type;
  const props = element.props;

  let renderedElement: Element;
  let publicInstance: Component | undefined = undefined;
  if (isComponentElement(type)) {
    // @ts-ignore
    publicInstance = new (type as Component)(props);
    // @ts-ignore
    publicInstance.props = props;
    // @ts-ignore
    renderedElement = publicInstance.render();
  } else {
    renderedElement = (type as ElementFunc)(props);
  }

  // 迭代挂载
  return mount(renderedElement);
}

/**
 * 挂载元素(只针对web)
 * @export
 * @param {Element} element 待挂载的元素
 * @returns {HTMLElement} 生成的元素
 */
export function mount(element: Element): HTMLElement {
  if (isHostElement(element.type)) {
    return mountHostElement(element);
  } else {
    return mountComponent(element);
  }
}

/* eslint-enable */
