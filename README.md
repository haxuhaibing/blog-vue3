<!--
 * @Date: 2023-06-25 16:01:59
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-06-24 21:22:02
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

<!--
 * @Date: 2022-01-25 17:57:16
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2022-10-21 11:43:40
 * @FilePath: /vue3-xiyun-h5/README.md
-->
defineExpose({
  showVisiable, // 明确的暴露接口
});
 

 `

 onMounted(() => {
  document.body.classList.add("html-gray");
});

 onUnmounted(() => {
  document.body.classList.remove("html-gray");
});
 `