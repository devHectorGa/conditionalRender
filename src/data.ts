type Objects = 'Earlier' | 'Month' | 'Week' | 'Year';

export interface IData {
  CreatedDate: string;
  DeepLink: string;
  Heading: string;
  Id: number;
  InboxAction: string;
  IsPublic: boolean;
  ItemType: string;
  PhotoUrl: string;
  Subtitle: string;
  Title: string;
  UserName: string;
}

export type IDatas = Record<Objects, IData[]>;

export const data: IDatas = {
  Earlier: [
    {
      CreatedDate: '2021-12-20T16:24:04.758Z',
      DeepLink: 'string',
      Heading: 'string',
      Id: 0,
      InboxAction: 'string',
      IsPublic: true,
      ItemType: 'string',
      PhotoUrl: 'string',
      Subtitle: 'string',
      Title: 'string',
      UserName: 'string',
    },
  ],
  Month: [
    {
      CreatedDate: '2021-12-20T16:24:04.758Z',
      DeepLink: 'string',
      Heading: 'string',
      Id: 0,
      InboxAction: 'string',
      IsPublic: true,
      ItemType: 'string',
      PhotoUrl: 'string',
      Subtitle: 'string',
      Title: 'string',
      UserName: 'string',
    },
  ],
  Week: [
    {
      CreatedDate: '2021-12-20T16:24:04.758Z',
      DeepLink: 'string',
      Heading: 'string',
      Id: 0,
      InboxAction: 'string',
      IsPublic: true,
      ItemType: 'string',
      PhotoUrl: 'string',
      Subtitle: 'string',
      Title: 'string',
      UserName: 'string',
    },
  ],
  Year: [
    {
      CreatedDate: '2021-12-20T16:24:04.758Z',
      DeepLink: 'string',
      Heading: 'string',
      Id: 0,
      InboxAction: 'string',
      IsPublic: true,
      ItemType: 'string',
      PhotoUrl: 'string',
      Subtitle: 'string',
      Title: 'string',
      UserName: 'string',
    },
  ],
};
