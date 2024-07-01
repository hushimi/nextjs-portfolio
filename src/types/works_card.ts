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

export type worksCard<T='get'> = Structure<
T,
{
  /**
   * カードイメージ
   */
  card_img: { url: string, width: number, height: number }
  /**
   * カードタイトル
   */
  card_title: string
  /**
   * カード説明
   */
  card_desc: string
  /**
   * カードスキル
   */
  card_skills?: works_card_devicon_classes[]
  /**
   * URL
   */
  work_url: string
}>

interface works_card_devicon_classes {
  fieldId: 'devicon_classes'
  /**
   * deviconクラス
   */
  devicon_class?: string
}

export interface EndPoints {
  get: {
    'works_card': worksCard<'get'>
  }
  gets: {
    'works_card': worksCard<'gets'>
  }
  post: {
    'works_card': worksCard<'post'>
  }
  put: {
    'works_card': worksCard<'put'>
  }
  patch: {
    'works_card': worksCard<'patch'>
  }
}
