/*
 * @Date: 2022-01-25 23:15:42
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2022-12-09 15:32:48
 * @FilePath: /vue3-xiyun-h5/src/interface/axiosInterface.ts
 */
export interface Iresponse {
  code: number;
  message: string;
  success: boolean;
  timestamp: number;
  result: any;
  [key: string]: any;
}
