import { httpClient } from '../../../utils/api';

export const fetchVehicles = async (guest, queryString) => {
  try {
    const endpoint = guest
      ? `vehicles/guest?${queryString}`
      : `vehicles?${queryString}`;
    const response = await httpClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};
