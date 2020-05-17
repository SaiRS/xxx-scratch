const tapable = require('tapable');

// 关心订阅的回调的返回值，前一个订阅的返回值被当作下一个订阅的参数

// 参数['arg1', 'arg2', 'arg3']定义了订阅回调函数的接口
const syncWaterFallHook = new tapable.SyncWaterfallHook([
  'arg1',
  'arg2',
  'arg3',
]);

/* ================================ 订阅  ============================= */

syncWaterFallHook.tap(
  {
    name: 'first',
  },
  (arg1, arg2, arg3) => {
    console.log('first', arg1, arg2, arg3);
    // 返回null, 将取代第一个参数
    return null;
  },
);

syncWaterFallHook.tap(
  {
    name: 'second',
  },
  (arg1, arg2, arg3) => {
    console.log('second', arg1, arg2, arg3);
  },
);

syncWaterFallHook.tap(
  {
    name: 'third',
  },
  (arg1, arg2, arg3) => {
    console.log('third', arg1, arg2, arg3);
  },
);

/* ================================ 发布  ============================= */

// 传入实参
syncWaterFallHook.call('实参1', '实参2', '实参3');
