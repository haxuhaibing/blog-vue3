/*
 * @Date: 2022-01-25 17:41:58
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-06-12 15:28:07
 * @FilePath: /blog-xuhaibing.com/src/config/config.ts
 */
let currentSite: any = {}
// 所有站点
const SITELIST = [
  {
    domain: 'blog.xuhaibing.com',
    api: 'https://blog.xuhaibing.com/ht/'
  },
  {
    domain: 'localhost',
    api: 'http://localhost:8080/jeecg-boot/'
  }
]

for (let item of SITELIST) {
  //前端开发环境 
  if (location.host.includes(item.domain)) {
    currentSite = item
    break
  }
  //线上环境
  if (location.host == item.domain) {
    currentSite = item
    break
  }
} 
export { currentSite }
