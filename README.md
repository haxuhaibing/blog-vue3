<!--
 * @Date: 2023-06-25 16:01:59
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-07 00:17:29
 * @FilePath: /blog-xuhaibing.com/README.md
-->
# blog-vue3
 
function User(username: string) {
  this.username = username
}
let zhangsan = new User('zhangsan')

console.dir(User)
console.dir(zhangsan)

console.log(zhangsan.constructor === User)


console.log(zhangsan.__proto__ === User.prototype)


console.log(zhangsan.constructor === User.prototype.constructor)


console.log(Object.getPrototypeOf(zhangsan) === User)