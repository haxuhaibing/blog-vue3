/*
 * @Date: 2024-03-25 23:20:01
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-25 23:32:02
 * @FilePath: /blog-xuhaibing.com/src/views/article/modules/comment.api.ts
 */

import { get, post } from '@/utils/http'
enum Api {
  list = '/barticlecomment/bArticleComment/list',
  save = '/barticlecomment/bArticleComment/add'
}

/**
 * 列表接口
 * @param params
 */
export const list = (params?: any) => get(Api.list, params)

/**
 * 列表接口
 * @param params
 */
export const add = (params: any) => post(Api.save, params)
