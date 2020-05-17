const tapable = require('tapable');

// 不关心订阅的回调的返回值，只是按照顺序调用回调
// 订阅的顺序可以通过第一个参数去调整
/**
 * {
	  // 标识符
    name: string;

    // 类型决定了fn的定义
    // 可选值"sync" | "async" | "promise"
    // 一般通过hook.tap, hook.tapAsync, hook.tapPromise去设置
    type: TapType;

    // 定义回调函数
    // 一般不通过Tap去设置，而是使用hook.tap等的第二个参数去设置
    fn: Function;

    // 调整订阅在订阅数组中的位置，可以填入一个标识符或者一组标识符
    before?: string | Array;

    // 位置的索引大小（只是表示一个相对的大小，小的在前面）
    // 在应用了before之后再剩余的订阅items中应用这个字段找到对应的位置
    stage: number;

    // 是否要附加上额外的context信息，如果为true，
    // 那么订阅的回调接受的第一个参数是一个context对象{}
    context: boolean;
 * }
 */

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
