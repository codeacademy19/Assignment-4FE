const axios = require('axios');

const getForms = async (url) => {
  const posts = await axios.get(url);
  // console.log(posts);
  return posts.data;
};
export default getForms;
