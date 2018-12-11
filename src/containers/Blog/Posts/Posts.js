import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import './Posts.css';

class Posts extends Component {
  state = {
    // Make Posts an Empty Array
    posts: [],
    // Store Selected Post Id
    selectedPostId: null,
    error: false
  };

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id})
  };

  componentDidMount() {
    // Fetch data, set the state with the response
    axios.get('/posts')
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
        // Catch an Error if wrong URL given
      }).catch(error => {
      console.log(error);
      // this.setState({error: true})
    })
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went Wrong</p>;
    // Put the fetched posts into a Post constant
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
          // Assign the post title from the fetched array to the component props
          return <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}/>
        }
      );
    }
    return (
      <section className="Posts">
        {/*Render the posts Dynamically*/}
        {posts}
      </section>
    )
  }
}

export default Posts;