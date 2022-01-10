import axios, { AxiosRequestConfig } from "axios";

// 创建一个axios实例
const instance = axios.create({
  baseURL: "http://localhost:9001/",
});

// 泛型接口,T的类型支持
export interface IResponseData<T = unknown> {
  code: number;
  message: string;
  result: T;
}

instance.interceptors.response.use((res) => {
  if (res.data.code !== 0) {
    return Promise.reject(res.data.message);
  }
  return res;
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

// 通用的请求函数
export async function request<T>(config: AxiosRequestConfig) {
  return instance
    .request<IResponseData<T>>(config)
    .then((res) => res.data.result);
}
