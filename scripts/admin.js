const ADMIN_PASSWORD = "your_secure_password"; // Change this

function login() {
  const password = document.getElementById("adminPassword").value;
  if (password === ADMIN_PASSWORD) {
    document.querySelector(".admin-login").style.display = "none";
    document.querySelector(".blog-form").style.display = "block";
  }
}

function saveBlog() {
  const newPost = {
    title: document.getElementById("blogTitle").value,
    content: document.getElementById("blogContent").value,
    date: new Date().toISOString().split("T")[0],
    image: document.getElementById("blogImage").value || null,
  };

  // Here you would typically send this data to a server
  // For GitHub Pages, you'll need to manually update blogs.json
  console.log("New Blog Post:", newPost);
  alert("Blog saved locally - update blogs.json manually for GitHub Pages");
}
