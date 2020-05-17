## 数据结构

### Tap

```
 {
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
}

```
