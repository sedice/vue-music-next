import { request } from "./request";

export interface ISinger {
  id: number;
  mid: string;
  name: string;
  pic: string;
}

export interface ISingerData {
  title: string;
  list: ISinger[];
}

export interface ISingerResult {
  singers: ISingerData[];
}

export function getSingerList() {
  return request<ISingerResult>({
    url: "/api/getSingerList",
    method: "GET",
  });
}

export function getSingerDetail(singer: { mid: number }) {
  return request({
    url: `/api/getSingerList/${singer.mid}`,
    method: "GET",
  });
}
