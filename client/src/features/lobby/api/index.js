import axios from '@/lib/axios';

export const fetchServerStats = async () => {
  const response = await axios.get('/dashboard/stats');
  return response.data;
};
