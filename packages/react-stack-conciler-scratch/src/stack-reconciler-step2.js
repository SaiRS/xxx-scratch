function isHostElement(type) {
  return typeof type === 'string';
}

function isClassComponent(type) {
  return type.__react_compoent === 'react-component';
}

// 封装element
function wrapElement(element) {
  if (isHostElement(element.type)) {
    return new InnerHostElement(element);
  } else {
    return new InnerComponentElement(element);
  }
}

class InnerComponentElement {
  constructor(element) {
    this.element = element;
  }

  mount() {
    let type = element.type;
    let props = element.props;

    let renderedElement = null;
    if (isClassComponent(type)) {
      let instance = new type(props);
      renderedElement = instance.render();
    } else {
      renderedElement = type(props);
    }

    return wrapElement(renderedElement).mount();
  }
}

class InnerHostElement {
  constructor(element) {
    this.element = element;
  }

  mount() {
    let element = this.element;

    let type = element.type;
    let props = element.props;

    let children = props.children || [];

    // 创建dom
    let dom = document.createElement(type);

    // 设置attributes

    // 子结点
    for (let child of children) {
      let childDom = wrapElement(child);
      dom.appendChild(childDom.mount());
    }

    return dom;
  }
}

// 对外接口

function render(element, container) {
  let innerElement = wrapElement(element);
  let dom = innerElement.mount();

  // 清空子元素
  container.appendChild(dom);
}
