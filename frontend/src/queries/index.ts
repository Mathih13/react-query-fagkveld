import config from "../config";

const fetchPosts = async () => {
  const response = await fetch(`${config.api.baseUrl}/posts`);
  return response.json();
};

export { fetchPosts };
