const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  if (response.status !== 200) {
    alert("username or password is incorrect");
  } else {
    const productList = document.querySelector(".product-list");
    const posts = await response.json();
    let postsHtml = "";
    for (const post of posts) {
      postsHtml =
        postsHtml +
        `<div class="col-4">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${post.body}  Products</h6>
              </div>
            </div>
          </div>`;
    }
    productList.innerHTML = postsHtml;
  }
};
getPosts();

// React Appliction Setup from the scratch
// COMPONENTS
// Virtual DOM
// JSX