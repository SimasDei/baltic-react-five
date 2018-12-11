import React, {Component} from 'react';
// Import axios for easy http requests
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount(prevProps, prevState, snapshot) {
    if (this.props.match.params.id) {
      // Check if we have a loaded post and a different id
      // In order to avoid an infinite loop
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id))  {
      axios.get('/posts/' +this.props.match.params.id).then(response => {
        this.setState({
          loadedPost: response.data
        })
      });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.id).then(response => {
      console.log(response);
    });
  };

  render() {
    let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
    // Check the validity of the ID null === false
    if (this.props.id) {
      post = <p style={{textAlign: 'center'}}>Loading...</p>;
    }
    //  Check if loaded post has been set
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;