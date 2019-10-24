/* eslint-disable require-jsdoc,
  unicorn/prevent-abbreviations,
  @typescript-eslint/no-explicit-any,
  promise/no-new-statics,
  no-console,
  @typescript-eslint/ban-ts-ignore */

import { mount } from './step/step1';
import { Element } from './base/element-type';
import { Component } from './base/component';

function funcComponent(props: Record<string, any>): Element {
  return {
    type: 'h1',
    props: props,
  };
}

class DemoComponent extends Component {
  render(): Element {
    return {
      type: 'p',
      props: this.props,
    };
  }
}

// 执行代码
const dom = mount({
  type: 'div',
  props: {
    class: 'class-name',
    style: 'width: 100%; height: 100%; background-color: pink;',
    children: [
      {
        type: funcComponent,
        props: {
          style: 'width: 50px; height: 50px; background-color: yellow;',
        },
      },
      '这个一个单独的字符串',
      {
        type: DemoComponent,
        props: {
          children: ['这个是在Component渲染的'],
        },
      },
    ],
  },
});
const app = document.querySelector('#app') as HTMLElement;
app.append(dom);

/* eslint-enable */
