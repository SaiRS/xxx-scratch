const tapable = require('tapable');

// 不关心订阅的回调的返回值,并行执行
// 参数['arg1', 'arg2', 'arg3']定义了订阅回调函数的接口
const asyncParallelHook = new tapable.AsyncParallelHook([
  'arg1',
  'arg2',
  'arg3',
]);

/* ================================ 订阅  ============================= */
asyncParallelHook.tap(
  {
    name: 'first',
  },
  (arg1, arg2, arg3) => {
    console.log('first', arg1, arg2, arg3);
  },
);

asyncParallelHook.tap(
  {
    name: 'second',
  },
  (arg1, arg2, arg3) => {
    console.log('second', arg1, arg2, arg3);
  },
);

// tapAsync类型的回调要有一个回调函数
// call: (error, result) => void
asyncParallelHook.tapAsync(
  {
    name: 'third',
  },
  (arg1, arg2, arg3, call) => {
    console.log('third', arg1, arg2, arg3);
    // 对于async parallel来说，没有定义onResult, 因为call的第二个参数没有用
    call(null, 'third');
  },
);

/* ================================ 发布  ============================= */

// 传入实参
// 对于call async来说，需要定义一个回调
asyncParallelHook.callAsync('实参1', '实参2', '实参3', (error, result) => {
  console.log('call async', error, result);
});
