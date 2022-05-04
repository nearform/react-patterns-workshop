import { NumberParam, StringParam, useQueryParams } from 'next-query-params'

export const useFilterQueryParams = () =>
  useQueryParams({ genre: StringParam, page: NumberParam, year: NumberParam })
