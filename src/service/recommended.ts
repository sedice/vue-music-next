import { request } from "./request";

("24572441");
("https://y.qq.com/n/yqq/album/002b855z4LLeHj.html");
("https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/4192498.jpg");

export interface IAlbums {
  id: number;
  username: string;
  pic: string;
  title: string;
}

interface ISlider {
  id: number;
  link: string;
  pic: string;
}

export interface IRecommendedResult {
  albums: IAlbums[];
  sliders: ISlider[];
}

export function getRecommend() {
  return request<IRecommendedResult>({
    url: "/api/getRecommend",
  });
}
