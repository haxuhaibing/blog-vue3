/*
 * @Date: 2024-03-06 17:57:53
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-06 18:26:59
 * @FilePath: /blog-xuhaibing.com/src/utils/demo.ts
 */
export function test() {
  function t(...args: any[]) {
    for (let item of args) {
      console.log(item, typeof item)
    }
  }

  t(null, undefined, 123, 'xuhaibing', true, NaN, {}, [], () => {}, Symbol())
}

export function tt() {
  //
}
