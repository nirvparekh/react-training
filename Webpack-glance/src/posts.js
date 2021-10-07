export const getPosts =  async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}
export const createPosts = async () => {};
export const deletePosts = async () => {};
