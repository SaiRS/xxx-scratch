const tapable = require('tapable');

// 不关心订阅的回调的返回值,串行执行
// 参数['arg1', 'arg2', 'arg3']定义了订阅回调函数的接口
const asyncParallelHook = new tapable.AsyncSeriesHook(['name']);

/* ================================ 订阅  ============================= */
asyncParallelHook.tapAsync('1', (name, cb) => {
  console.log(name, 1);
  cb();
});
asyncParallelHook.tapAsync('2', (name, cb) => {
  setTimeout(() => {
    console.log(name, 2);
    cb(null);
  }, 1000);
});
asyncParallelHook.tapAsync('3', (name, cb) => {
  setTimeout(() => {
    console.log(name, 3);
    cb(null);
  }, 100);
});

// tapAsync类型的回调要有一个回调函数
// call: (error, result) => void
asyncParallelHook.tapAsync(
  {
    name: 'third',
  },
  (arg1, call) => {
    console.log('third', arg1);
    // 对于async series来说，没有定义onResult, 因而call的第二个参数没有用
    call(null, 'third');
  },
);

/* ================================ 发布  ============================= */

// 传入实参
// 对于call async来说，需要定义一个回调
asyncParallelHook.callAsync('实参1', (error, result) => {
  console.log('call async', error, result);
});
