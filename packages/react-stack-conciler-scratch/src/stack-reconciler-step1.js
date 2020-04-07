function isHostElement(type) {
  return typeof type === 'string';
}

function isClassComponent(type) {
  return type.__react_compoent === 'react-component';
}

function mountHostElement(element) {
  let type = element.type;
  let props = element.props;

  let children = props.children || [];

  // 创建dom
  let dom = document.createElement(type);

  // 设置attributes

  // 子结点
  for (let child of children) {
    let childDom = mount(child);
    dom.appendChild(childDom);
  }

  return dom;
}

function mountComponentElement(element) {
  let type = element.type;
  let props = element.props;

  let renderedElement = null;
  if (isClassComponent(type)) {
    let instance = new type(props);
    renderedElement = instance.render();
  } else {
    renderedElement = type(props);
  }

  // 继续递归
  return mount(renderedElement);
}

function mount(element) {
  if (isHostElement(element.type)) {
    return mountHostElement(element);
  } else {
    return mountComponentElement(element);
  }
}

// 对外接口
function render(element, container) {
  let dom = mount(element);

  // 清空子元素
  container.removeAllChildren();
  container.appendChild(dom);
}
