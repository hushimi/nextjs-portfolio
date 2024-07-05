type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type aboutMe<T='get'> = Structure<
T,
{
  /**
   * 自己画像
   */
  about_img?: { url: string, width: number, height: number }
  /**
   * 名前
   */
  about_name?: string
  /**
   * 自己紹介
   */
  about_desc?: string
  /**
   * 職務履歴
   */
  about_history?: about_me_jobhistory[]
}>

interface about_me_jobhistory {
  fieldId: 'jobhistory'
  /**
   * 職務タイトル
   */
  job_title: string
  /**
   * 職務詳細
   */
  job_detail: string
}

export interface EndPoints {
  get: {
    'about_me': aboutMe<'get'>
  }
  gets: {
    'about_me': aboutMe<'gets'>
  }
  post: {
    'about_me': aboutMe<'post'>
  }
  put: {
    'about_me': aboutMe<'put'>
  }
  patch: {
    'about_me': aboutMe<'patch'>
  }
}
