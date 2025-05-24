document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/blogs.json")
    .then((response) => response.json())
    .then((blogs) => {
      const container = document.getElementById("blogPosts");
      blogs.forEach((blog) => {
        const blogPost = document.createElement("article");
        blogPost.className = "blog-post";
        blogPost.innerHTML = `
                    ${
                      blog.image
                        ? `<img src="${blog.image}" alt="${blog.title}">`
                        : ""
                    }
                    <h2>${blog.title}</h2>
                    <p>${blog.content}</p>
                    <small>${blog.date}</small>
                `;
        container.appendChild(blogPost);
      });
    });
});
