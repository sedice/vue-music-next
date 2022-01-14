import { request } from "./request";

export interface ISong {
  id: number;
  mid: string;
  name: string;
  singer: string;
  url: string;
  duration: number;
  pic: string;
  album: string;
}

export function getSingerDetail(mid: string) {
  return request<{
    songs: ISong[];
  }>({
    url: `/api/getSingerDetail`,
    params: {
      mid,
    },
    method: "GET",
  });
}

export function processSongs(songs: ISong[]) {
  if (!songs.length) {
    return Promise.resolve(songs);
  }
  return request<{
    map: Record<string, string>;
  }>({
    url: `/api/getSongsUrl`,
    params: {
      mid: songs.map((song) => {
        return song.mid;
      }),
    },
  }).then((result) => {
    const map = result.map;
    return songs
      .map((song) => {
        song.url = map[song.mid];
        return song;
      })
      .filter((song) => {
        return song.url && song.url.indexOf("vkey") > -1;
      });
  });
}
