const tapable = require('tapable');

// 关心订阅的回调的返回值,串行执行
// 前一个订阅的返回值，充当下一个订阅的入参
// 参数['name']定义了订阅回调函数的接口
let queue3 = new tapable.AsyncSeriesWaterfallHook(['name', 'gender']);
console.time('cost3');
queue3.tapAsync('1', function(name, gender, callback) {
  setTimeout(function() {
    console.log('1:', name);
    callback(null, '1');
  }, 1000);
});
queue3.tapPromise('2', function(data, gender, callback) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('2:', data, gender);
      resolve('2');
    }, 2000);
  });
});
queue3.tapPromise('3', function(data, gender, callback) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('3:', data, gender);
      resolve('over');
    }, 3000);
  });
});
queue3.promise('webpack', 'girl').then(
  (err) => {
    console.log(err);
    console.timeEnd('cost3');
  },
  (err) => {
    console.log(err);
    console.timeEnd('cost3');
  },
);

/*

1: webpack
2: 1
3: 2
over
cost3: 6021.419ms

*/
