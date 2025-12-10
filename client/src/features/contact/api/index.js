import apiClient from '@lib/axios';

export const submitContact = async (data) => {
  const response = await apiClient.post('/v1/contact', data);
  return response.data;
};
