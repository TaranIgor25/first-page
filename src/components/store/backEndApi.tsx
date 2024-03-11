import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, IServerResponse } from '../../types/interfaces';

export const googleSheetsApi = createApi({
  reducerPath: 'googleSheet/Img',
  baseQuery: fetchBaseQuery({
      baseUrl: 'https://v1.slashapi.com/team-15/google-sheets/3imK1w06aB/',
  }),
  endpoints: build => ({
    getContent: build.query<IUser[], string> ({
      query: (endUrl: string) => ({
        url: `SixSectionContent/${endUrl}`,
      }),
      transformResponse: (response : IServerResponse) => response.data
    })
  })
})

export const {useGetContentQuery} = googleSheetsApi;