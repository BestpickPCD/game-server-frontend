import moment from 'moment';

export const trimInput = (value: string | number): string | number => {
  console.log(value);
  return typeof value === 'string' ? value.trim() : value;
};

export const onSortTable = (
  array: unknown[],
  key: string,
  direction: 'asc' | 'desc'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any =>
  [...array].sort((a, b) => {
    if (typeof a[key] === 'string' && typeof b[key] === 'string') {
      if (direction === 'asc') {
        return a[key].localeCompare(b[key]);
      }
      return b[key].localeCompare(a[key]);
    } else if (typeof a[key] === 'number' && typeof b[key] === 'number') {
      if (direction === 'asc') {
        return a[key] - b[key];
      }
      return b[key] - a[key];
    }
    return 0;
  });

export const formatToISOString = (date: Date): string =>
  moment(date).utc().toISOString();
