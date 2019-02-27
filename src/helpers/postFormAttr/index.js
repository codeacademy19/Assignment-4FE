const axios = require('axios');

const postForm = async (formName, attributes) => {
  const posts = await axios.post(`http://localhost:7000/${formName}`, {
    attributes,
  });
  return posts.data;
};
export default postForm;
