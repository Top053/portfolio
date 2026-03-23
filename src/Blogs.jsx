function Blog(){
    const posts = [
        {id:"javascript" , title:"My Encounter With Javascript"}
    ]

    return(
        <div>
            <div className="main">
                <h1 className="blog-h1">Blog Posts</h1>
                <p className="blog-p">Explore my thoughts, step-by-step tutorials, and insights on various topics</p>
            </div>

            {posts.map(post =>(
                <div className="posts-container" key={post.id}>
                    <h3>{post.title}</h3>
                    <p>Date Published: March 23, 2026</p>
                </div>
            ))}
        </div>
    )
}
export default Blog;