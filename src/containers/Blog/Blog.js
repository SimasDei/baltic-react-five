import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    // Make Posts an Empty Array
    posts: [],
    // Store Selected Post Id
    selectedPostId: null
  };

  componentDidMount() {
    // Fetch data, set the state with the response
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        //Transform the gotten data
        const posts = response.data.slice(0, 4);
        // For each post, return a JavaScript Object
        const updatedPosts = posts.map(post => {
          return {
            // Distribute the property of the post
            ...post,
            // Add a new Property: Author
            author: 'Sai'
          }
        });
        // Setstate to the Transformed Posts
        this.setState({posts: updatedPosts});
        // console.log(response);
      })
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id})
  };

  render() {
    // Put the fetched posts into a Post constant
    const posts = this.state.posts.map(post => {
        // Assign the post title from the fetched array to the component props
        return <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}/>
      }
    );
    return (
      <div>
        <section className="Posts">
          {/*Render the posts Dynamically*/}
          {posts}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost/>
        </section>
      </div>
    );
  }
}

export default Blog;