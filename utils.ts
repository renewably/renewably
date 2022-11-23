import * as qs from 'qs';
import * as _ from 'lodash';

export const PAGE_SIZE = 8;
export const getResultsWithFilters = async (contextParams: any) => {
  const page = contextParams?.page || 1;
  const start = PAGE_SIZE * (page - 1);
  const params = {
    draw: 1,
    'columns[0][data]': 'name',
    'columns[0][name]': '',
    'columns[0][searchable]': true,
    'columns[0][orderable]': true,
    'columns[0][search][value]': '',
    'columns[0][search][regex]': false,
    'columns[1][data]': 'stateObj.abbreviation',
    'columns[1][name]': '',
    'columns[1][searchable]': true,
    'columns[1][orderable]': true,
    'columns[1][search][value]': '',
    'columns[1][search][regex]': false,
    'columns[2][data]': 'categoryObj.name',
    'columns[2][name]': '',
    'columns[2][searchable]': true,
    'columns[2][orderable]': true,
    'columns[2][search][value]': '',
    'columns[2][search][regex]': false,
    'columns[3][data]': 'typeObj.name',
    'columns[3][name]': '',
    'columns[3][searchable]': true,
    'columns[3][orderable]': true,
    'columns[3][search][value]': '',
    'columns[3][search][regex]': false,
    'columns[4][data]': 'published',
    'columns[4][name]': '',
    'columns[4][searchable]': true,
    'columns[4][orderable]': true,
    'columns[4][search][value]': '',
    'columns[4][search][regex]': false,
    'columns[5][data]': 'createdTs',
    'columns[5][name]': '',
    'columns[5][searchable]': true,
    'columns[5][orderable]': true,
    'columns[5][search][value]': '',
    'columns[5][search][regex]': false,
    'columns[6][data]': 'updatedTs',
    'columns[6][name]': '',
    'columns[6][searchable]': true,
    'columns[6][orderable]': true,
    'columns[6][search][value]': '',
    'columns[6][search][regex]': false,
    'order[0][column]': 6,
    'order[0][dir]': 'desc',
    start,
    length: PAGE_SIZE,
    'search[value]': '',
    'search[regex]': false,
    _: 1668629121419,
  };
  const queryParams = _.omit(contextParams, 'page');
  const combinedParams = _.merge(params, queryParams);
  const queryString = qs.stringify(combinedParams);
  const url = `https://programs.dsireusa.org/api/v1/programs?${queryString}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    return { error };
  }
};
