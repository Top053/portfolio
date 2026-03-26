import posts from "./blogposts"
function Blog(){

    return(
        <div>
            <div className="main">
                <h1 className="blog-h1">Blog Posts</h1>
                <p className="blog-p">Explore my thoughts, step-by-step tutorials, and insights on various topics</p>
            </div>

            {posts.map(post =>(
                <div className="post-container" key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <p>Date Published: {post.date}</p>
                </div>
            ))}
        </div>
    )
}
export default Blog;