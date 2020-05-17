const tapable = require('tapable');

// 不关心订阅的回调的返回值，只是按照顺序调用回调
// 如果有某个订阅的回调函数返回值不为undefined，则跳过后面的订阅
// 参数['arg1', 'arg2', 'arg3']定义了订阅回调函数的接口
const syncBailHook = new tapable.SyncBailHook(['arg1', 'arg2', 'arg3']);

/* ================================ 订阅  ============================= */

syncBailHook.tap(
  {
    name: 'first',
  },
  (arg1, arg2, arg3) => {
    console.log('first', arg1, arg2, arg3);
  },
);

syncBailHook.tap(
  {
    name: 'second',
  },
  (arg1, arg2, arg3) => {
    console.log('second', arg1, arg2, arg3);
    // 只要不为undefined,则跳过后面的订阅
    return null;
  },
);

syncBailHook.tap(
  {
    name: 'third',
  },
  (arg1, arg2, arg3) => {
    console.log('third', arg1, arg2, arg3);
  },
);

/* ================================ 发布  ============================= */

// 传入实参
syncBailHook.call('实参1', '实参2', '实参3');
