/*
 * @Date: 2023-06-25 18:02:55
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2023-06-26 18:36:01
 * @FilePath: /blog-xuhaibing.com/src/api/articleApi.ts
 */
import { get, post } from '@/utils/http'

/**
 * 获取列表
 */
export const getList = (data?: any) => {
  return get('/barticle/bArticle/list', data)
}
export const geQueryById = (data?: any) => {
  return get('/barticle/bArticle/queryById', data)
}
