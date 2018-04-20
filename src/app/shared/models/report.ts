export interface Report {
  kind?: string;
  id?: string;
  selfLink?: string;
  containsSampledData?: boolean;
  query?: {
    'start - date'?: string,
    'end - date'?: string,
    ids?: string,
    dimensions?: [
      string
    ],
    metrics?: [
      string
    ],
    'include - empty - rows'?: boolean,
    samplingLevel?: string,
    sort?: [
      string
    ],
    filters?: string,
    segment?: string,
    'start-index'?: Number,
    'max-results'?: Number
  };
  itemsPerPage?: Number;
  totalResults?: Number;
  previousLink?: string;
  nextLink?: string;
  profileInfo?: {
    profileId?: string,
    accountId?: string,
    webPropertyId?: string,
    internalWebPropertyId?: string,
    profileName?: string,
    tableId?: string
  };
  columnHeaders: [
    {
      name: string,
      columnType: string,
      dataType: string
    }
  ];
  'rows': [
    [
      string
    ]
  ];
  'sampleSize': string;
  'sampleSpace': string;
  'totalsForAllResults': [
    {
      metricName: string,
    }
  ];
}
