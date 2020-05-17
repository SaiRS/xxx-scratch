const tapable = require('tapable');

// 关心订阅的回调的返回值
// 对于返回值不为undefined的tap，会重复执行从第一个tap到当前tap的整个过程

// 参数['arg1', 'arg2', 'arg3']定义了订阅回调函数的接口
const syncLoopHook = new tapable.SyncLoopHook(['arg1', 'arg2', 'arg3']);

/* ================================ 订阅  ============================= */

syncLoopHook.tap(
  {
    name: 'first',
  },
  (arg1, arg2, arg3) => {
    console.log('first', arg1, arg2, arg3);
  },
);

syncLoopHook.tap(
  {
    name: 'second',
    context: true,
  },
  (context, arg1, arg2, arg3) => {
    console.log('second', arg1, arg2, arg3);

    context['count'] = (context['count'] || 0) + 1;

    // 会导致first和second循环2次，总共输出3次first,second
    if (context['count'] < 3) {
      return null;
    }
  },
);

syncLoopHook.tap(
  {
    name: 'third',
  },
  (arg1, arg2, arg3) => {
    console.log('third', arg1, arg2, arg3);
  },
);

/* ================================ 发布  ============================= */

// 传入实参
syncLoopHook.call('实参1', '实参2', '实参3');
