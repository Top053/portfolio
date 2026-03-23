function Blog(){
    const posts = [
        {id:"javascript" , title:"my encounter with javascript"}
    ]

    return(
        <div>
            <div className="main">
                <h1 className="blog-h1">Blog Posts</h1>
                <p className="blog-p">Explore my thoughts, step-by-step tutorials, and insights on various topics</p>
            </div>

            {posts.map(post =>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                </div>
            ))}
        </div>
    )
}
export default Blog;