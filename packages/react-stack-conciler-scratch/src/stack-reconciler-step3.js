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

function getAttributes(props) {}

class InnerComponentElement {
  constructor(element) {
    this.element = element;
    this.renderedElement = null;
    this.instance = null;
  }

  mount() {
    let type = element.type;
    let props = element.props;

    let renderedElement = null;
    if (isClassComponent(type)) {
      let instance = new type(props);
      this.instance = instance;
      renderedElement = instance.render();
    } else {
      renderedElement = type(props);
    }

    this.renderedElement = wrapElement(renderedElement); // 记录
    return this.renderedElement.mount();
  }

  getNode() {
    return this.renderedElement.getNode();
  }

  receive(nextElement) {
    let type = nextElement.type;
    let nextProps = nextElement.props;

    let renderedElement = this.renderedElement.element;

    // 生命周期函数
    // willReceive
    // shouldUpdate
    // this.instance.xxxxxx

    // 区分出function和class
    let nextRenderedElement;
    if (isClassComponent(type)) {
      this.instance.props = nextProps;
      nextRenderedElement = this.instance.render();
    } else {
      nextRenderedElement = type(nextProps);
    }

    // 对比renderedElement和nextRenderElement
    if (renderedElement.type === nextRenderedElement.type) {
      this.renderedElement.receive(nextRenderedElement);
    } else {
      // 卸载再加载
      let node = this.renderedElement.getNode();
      this.renderedElement.unmount();

      this.renderedElement = wrapElement(nextElement);
      node.parent.replaceChild(this.renderedElement.mount(), node);
    }
  }

  unmount() {
    // 生命周期
    // this.instance && this.instance.componentWillUnmount();

    this.renderedElement.unmount();
  }
}

class InnerHostElement {
  constructor(element) {
    this.element = element;
    this.node = null;
    this.children = [];
  }

  getNode() {
    return this.node;
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
      this.children.push(childDom);
      dom.appendChild(childDom.mount());
    }

    this.node = dom;
    return dom;
  }

  receive(nextElement) {
    // 从props里边获取
    let attrs = getAttributes(this.element.props);
    let nextAttrs = getAttributes(nextElement.props);

    // 更新，删除，新增attributes
    for (let oldAttr of attrs) {
      // 如果不再nextAttrs中存在
      // 则删除
    }

    for (let newAttr of nextAttrs) {
      // 设置
    }

    let children = this.children;
    let nextChildren = nextElement.props.children;

    let nextRenderedChildren = [];
    let operation = [];

    for (let i = 0; i < nextChildren.length; i++) {
      let prev = children[i];
      if (!prev) {
        // 之前没有，新增
        let nextChild = wrapElement(nextChildren[i]);
        let node = nextChild.mount();
        // 记录node
        operation.push({
          type: 'add',
          node: node,
        });

        nextRenderedChildren.push(nextChild);
        continue;
      }

      let canUpdate = prev.element.type === nextChildren[i].type;
      if (!canUpdate) {
        // 卸载再加载
        let prevNode = prev.getNode();
        prev.unmount();

        let nextChild = wrapElement(nextChildren[i]);
        let nextNode = nextChild.mount();
        nextRenderedChildren.push(nextChild);

        operation.push({
          type: 'replace',
          from: prevNode,
          to: nextNode,
        });

        continue;
      }

      // 更新
      prev.receive(nextChildren[i]);
      nextRenderedChildren.push(prev);
    }

    for (let i = nextChildren.length; i < children.length; i++) {
      // 卸载
      let pre = children[i];

      let prevNode = pre.getNode();
      pre.unmount();

      operation.push({
        type: 'remove',
        node: prevNode,
      });
    }

    // 对operation进行处理
    for (let operator of operation) {
      switch (operator.type) {
        case 'add':
          this.node.appendChild(operator.node);
          break;

        case 'remove':
          this.node.removeChild(operator.node);
          break;

        case 'replace':
          this.node.replaceChild(operator.to, operator.from);
          break;
      }
    }
  }

  unmount() {
    this.chilrend.forEach((child) => {
      child.unmount();
    });
  }
}

// 对外接口
function render(element, container) {
  // 找到之前的元素
  let prev = container.__prev;
  if (prev) {
    // 存在
    if (prev.element.type === element.type) {
      prev.receive(element);
      return;
    }
  }

  let innerElement = wrapElement(element);
  let dom = innerElement.mount();

  // 清空子元素
  container.removeAllChildren();
  container.appendChild(dom);

  // 记录
  container.__prev = innerElement;
}
