export const buildQueryString = params => {
  if (!params) return '';

  return Object.keys(params).sort().reduce((result, key) => {
    const value = params[key];
    return value === null || value === undefined ?
      result :
      result.concat(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }, [])
  .join('&');
};
