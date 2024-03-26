/*
 * @Date: 2024-03-25 23:46:36
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-25 23:48:40
 * @FilePath: /blog-xuhaibing.com/src/utils/util.ts
 */
export function getImageUrl(name:string) {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
}
