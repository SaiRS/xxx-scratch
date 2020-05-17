const tapable = require('tapable');

// 不关心订阅的回调的返回值，只是按照顺序调用回调s
// 参数['arg1', 'arg2', 'arg3']定义了订阅回调函数的接口
const SyncHook = new tapable.SyncHook(['arg1', 'arg2', 'arg3']);

/* ================================ 订阅  ============================= */
SyncHook.tap(
  {
    name: 'second',
  },
  (arg1, arg2, arg3) => {
    console.log('second', arg1, arg2, arg3);
  },
);

SyncHook.tap(
  {
    name: 'first',
    // 使用了before, 所以这个订阅在second对应的订阅之前
    before: 'second',
  },
  (arg1, arg2, arg3) => {
    console.log('first', arg1, arg2, arg3);
  },
);

SyncHook.tap(
  {
    name: 'before-first',
    // stage默认为0, 因此这个订阅在first之前
    stage: -1,
  },
  (arg1, arg2, arg3) => {
    console.log('before-first', arg1, arg2, arg3);
  },
);

SyncHook.tap(
  {
    name: 'third',
    // 启用了context
    context: true,
  },
  (context, arg1, arg2, arg3) => {
    console.log('third', context, arg1, arg2, arg3);

    // 修改context
    context['changedBy'] = 'third';
  },
);

SyncHook.tap(
  {
    name: 'forth',
    // 启用了context
    context: true,
  },
  (context, arg1, arg2, arg3) => {
    // context不在是一个空对象
    console.log('forth', context, arg1, arg2, arg3);
  },
);

/* ================================ 发布  ============================= */

// 传入实参
SyncHook.call('实参1', '实参2', '实参3');
