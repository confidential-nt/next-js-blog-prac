import postsData from "../posts/posts.json"; // server-side 에서는 이렇게 Import 가능.

export function getAllSortedPosts(order = "asc") {
  const posts = postsData.posts.map((post) => ({
    id: post.id,
    title: post.title,
    date: post.date,
    content: post.content,
  }));

  if (order === "dsc")
    return posts.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) return 1;
      if (new Date(a.date) > new Date(b.date)) return -1;
      return 0;
    });

  return posts;
}

export function getAllPostIDs() {
  return postsData.posts.map((post) => ({
    params: {
      id: String(post.id),
    },
  }));
}

export function findPostByID(id) {
  return postsData.posts.find((post) => String(post.id) === id);
}
