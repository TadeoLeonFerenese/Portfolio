import { useState, useEffect } from 'react';
import { fetchProjects } from '../api';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const response = await fetchProjects();
        // The API returns { data: [...], meta: ... }
        setProjects(response.data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error };
};
