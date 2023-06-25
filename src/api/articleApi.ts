/*
 * @Date: 2023-06-25 18:02:55
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2023-06-25 18:14:44
 * @FilePath: /blog-vue3/src/api/articleApi.ts
 */
import { get, post } from '@/utils/http'

/**
 * 获取列表
 */
export const getList = (data?: any) => {
  return get('/barticle/bArticle/list', data)
}
