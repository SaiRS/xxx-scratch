const tapable = require('tapable');

// 关心订阅的回调的返回值,串行执行
// 如果有某个订阅的回调函数返回值不为undefined，则跳过后面的订阅
// 参数['name']定义了订阅回调函数的接口
const asyncParallelHook = new tapable.AsyncSeriesBailHook(['name']);

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
    // 取消下边的注释，则会跳过third执行
    cb(null, '3');
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
