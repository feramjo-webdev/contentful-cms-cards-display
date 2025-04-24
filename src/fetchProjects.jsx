import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const {
  VITE_PROJECTS_SPACE,
  VITE_PROJECTS_ACCESS_TOKEN,
  VITE_CONTENTFUL_TYPE,
} = import.meta.env;

const client = createClient({
  space: VITE_PROJECTS_SPACE,
  environment: 'master',
  accessToken: VITE_PROJECTS_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: VITE_CONTENTFUL_TYPE,
      });

      const fetchProjects = items.map((item) => {
        const { title, url, image } = item.fields;
        const imgUrl = image?.fields?.file?.url;
        const { id } = item.sys;
        return {
          title,
          url,
          imgUrl,
          id,
        };
      });
      setProjects(fetchProjects);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return { isLoading, projects };
};
