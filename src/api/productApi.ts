/*
 * @Date: 2023-06-25 18:02:55
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-06-23 13:55:09
 * @FilePath: /blog-xuhaibing.com/src/api/productApi.ts
 */
import { get, post } from '@/utils/http'

/**
 * 获取列表
 */
export const getList = (data?: any) => {
  return get('/bproduct/bProduct/list', data)
}
export const geQueryById = (data?: any) => {
  return get('/bproduct/bProduct/queryById', data)
}

 