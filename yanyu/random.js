var posts=["posts/58731d314a72.html","posts/b73af89aa64b.html","posts/d086a2710935.html","posts/75e805a18234.html","posts/ae781e160f33.html","posts/117c5d91f6de.html","posts/d28bc73885cb.html","posts/415b7affadaa.html","posts/15cc53221daa.html","posts/9e3212fbe23a.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};