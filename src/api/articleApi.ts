/*
 * @Date: 2023-06-25 18:02:55
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-06-24 13:55:04
 * @FilePath: /blog-xuhaibing.com/src/api/articleApi.ts
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

export const queryBProductSkuByMainId = (data?: any) => {
  return get('/bproduct/bProduct/queryBProductSkuByMainId', data)
}

