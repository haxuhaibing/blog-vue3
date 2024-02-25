/*
 * @Date: 2022-01-25 23:15:42
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-02-23 15:49:00
 * @FilePath: /blog-xuhaibing.com/src/interface/axiosInterface.ts
 */
export interface Iresponse {
  code: number;
  message: string;
  success: boolean;
  timestamp: number;
  result: any;
  [key: string]: any;
}