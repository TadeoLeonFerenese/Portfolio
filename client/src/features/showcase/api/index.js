import apiClient from '@lib/axios';

export const fetchProjects = async () => {
  const response = await apiClient.get('/v1/projects');
  return response.data;
};
