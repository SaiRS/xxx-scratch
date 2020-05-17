const tapable = require('tapable');

// 关心订阅的回调的返回值
// 如果有某个订阅的回调函数返回值不为undefined，则跳过后面的订阅
// 参数['arg1', 'arg2', 'arg3']定义了订阅回调函数的接口
const asyncParallelBailHook = new tapable.AsyncParallelBailHook([
  'arg1',
  'arg2',
  'arg3',
]);

/* ================================ 订阅  ============================= */
asyncParallelBailHook.tap(
  {
    name: 'first',
  },
  (arg1, arg2, arg3) => {
    console.log('first', arg1, arg2, arg3);
  },
);

asyncParallelBailHook.tap(
  {
    name: 'second',
  },
  (arg1, arg2, arg3) => {
    console.log('second', arg1, arg2, arg3);
    // 取消下边的注释，将跳过thire
    // return null;
  },
);

// tapAsync类型的回调要有一个回调函数
// call: (error, result) => void
asyncParallelBailHook.tapAsync(
  {
    name: 'third',
  },
  (arg1, arg2, arg3, call) => {
    console.log('third', arg1, arg2, arg3);
    call(null, 'third');
  },
);

/* ================================ 发布  ============================= */

// 传入实参
// 对于call async来说，需要定义一个回调
asyncParallelBailHook.callAsync('实参1', '实参2', '实参3', (error, result) => {
  console.log('call async', error, result);
});
