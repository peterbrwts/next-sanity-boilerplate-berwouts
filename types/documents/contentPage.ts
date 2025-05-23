// types/contentPage.ts

export interface ContentPage {
    _id: string;
    _type: 'contentPage';
    title: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    content: Array<{
      _key: string;
      _type: 'block';
      children: Array<{
        _key: string;
        _type: 'span';
        text: string;
      }>;
    }>;
    showInMenu?: boolean;
    menuOrder?: number;
  }
  