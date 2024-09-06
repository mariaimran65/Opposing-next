import { httpClient } from '../../../utils/api';

// Fetch vehicles
export const fetchVehicles = async (guest) => {
  try {
    const response = await httpClient.get(
      guest ? 'vehicles/home-guest' : 'vehicles/home'
    );
    return {
      vehicles: response.data.vehicles,
      vehiclesCount: response.data.vehiclesCount
    };
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};

// Fetch sold vehicles
export const fetchSoldVehicles = async () => {
  try {
    const response = await httpClient.get('vehicles/sold');
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};
