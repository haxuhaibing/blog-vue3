import axios from "axios"; 
import { useStorage } from "vue3-storage";
import {currentSite} from "@/config/config";
import router from "@/router";
axios.defaults.baseURL =currentSite.api;
axios.defaults.timeout = 30000; //20秒超时storage.getStorageSync("token") ||
const storage = useStorage();
storage.setStorageSync('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTg3MzQ5NzksInVzZXJuYW1lIjoiYWRtaW4ifQ.EPI2YNM5J4kzbwhj8kY9V1Zh2IpYZcV4dJ4UaKMdsFQ');
axios.interceptors.request.use(
  (config: any) => {
    if (storage.getStorageSync("token") != null) {
       config.headers = config.headers ?? {};
      config.headers["X-Access-Token"] = storage.getStorageSync(
        "token"
      ) as string;
      config.headers["tenant-id"] = 0;
    }
    return config;
  },
  (err: any) => Promise.reject(err)
);
// http response 拦截器
axios.interceptors.response.use(
  (response: any) => {
    let data = response.data;
    return data;
  },
  (error: any) => {
    console.log("error.response", error);
    if (error.toString().includes("Network Error")) {
     // showFailToast("网络异常，请检查网络!");
      return;
    }
    if (error.toString().includes("timeout")) {
      //showFailToast("请求超时，请重新再试!");
      return;
    }

    // if (error.toString()) {
    //     Toast('请求异常!');
    //     return;
    // }
    //其它错误处理
    if (error.response) {
      console.log("error", error.response);

      let token=error?.response?.data?.message || ''

      if (token.includes("oken")) {
       
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        sessionStorage.removeItem("store");
        /**
         * 记住当前路由，登录后重新跳回
         */
        let redirect: any = router.currentRoute.value.fullPath || "";
        console.log(redirect);

        setTimeout(() => {
          router.push({
            path: "/login",
            query: { redirect: encodeURIComponent(redirect) },
          });
        }, 500);
      } else {
        if(error.response.status == 404){ 
          return 
        } 
      }
    }
    return Promise.reject(error);
  }
);

export function post(url: string, data = {}, config = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, config).then(
      (response: any) => {
        resolve(response);
      },
      (error: any) => {
        reject(error);
      }
    );
  });
}

export function uploadFile(url: string, data: any = {}, config: any = {}) {
  return new Promise((resolve, reject) => {
    // config.headers["Content-Type"] = "multipart/form-data";
    config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    axios.post(url, data, config).then(
      (response: any) => {
        resolve(response);
      },
      (error: any) => {
        reject(error);
      }
    );
  });
}

export function get(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then(
        (response: any) => {
          resolve(response);
        },
        (error: any) => {
          reject(error);
        }
      );
  });
}

export function put(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response: any) => {
        resolve(response);
      },
      (error: any) => {
        reject(error);
      }
    );
  });
}

export function del(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        params: data,
      })
      .then(
        (response: any) => {
          resolve(response);
        },
        (error: any) => {
          reject(error);
        }
      );
  });
}
