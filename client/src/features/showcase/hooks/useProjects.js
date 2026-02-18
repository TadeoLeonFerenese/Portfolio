import { useState, useEffect } from 'react';
import { fetchProjects } from '../api';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async (retryCount = 0) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchProjects();
        // The API returns { data: [...], meta: ... }
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        console.error(`Failed to fetch projects (attempt ${retryCount + 1}/${MAX_RETRIES}):`, err);
        
        if (retryCount < MAX_RETRIES - 1) {
          // Retry with exponential backoff
          const delay = RETRY_DELAY * Math.pow(2, retryCount);
          console.log(`Retrying in ${delay}ms...`);
          setTimeout(() => loadProjects(retryCount + 1), delay);
        } else {
          // Final failure after all retries
          setError(err);
          setLoading(false);
        }
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error };
};
