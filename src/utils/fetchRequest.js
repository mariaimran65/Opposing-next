import logError from './logError';

export const fetchRequest = async (params) => {
  const { url, method, headers: reqHeaders, data, IP } = params || {};

  let headers = {};
  if (data) headers['Content-Type'] = 'application/json';
  if (IP) headers['x-forwarded-for'] = IP;
  headers = { ...headers, ...(reqHeaders || {}) };

  const options = {
    method: method || 'GET',
    headers,
    body: data ? JSON.stringify(data) : null // body data type must match "Content-Type" header
  };

  try {
    const rawData = await fetch(url, options);
    const response = rawData ? await rawData.json() : null;
    return { response: { data: response }, error: null };
  } catch (error) {
    logError({ error, additionalParams: { url, data, method } });
    return { response: null, error };
  }
};

export const postFetchRequest = (params) =>
  fetchRequest({ method: 'POST', ...params });

export const putFetchRequest = (params) =>
  fetchRequest({ method: 'PUT', ...params });
