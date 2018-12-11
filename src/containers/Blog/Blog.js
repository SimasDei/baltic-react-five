import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
// import axios from 'axios';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

  render() {
    return (
      <div className={'Blog'}>
        <header>
          <nav>
            <ul>
              <li><NavLink
                to={'/'}
                exact
                activeClassName={'my-active'}
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}>Home</NavLink></li>
              <li><NavLink to={{
                // Use The Match property from the props to specify post URL
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path={'/'} exact component={Posts}/>
        <Route path={'/new-post'} componenit={NewPost}/>
        <Route path={'/posts/:id'} exact component={FullPost}/>
      </div>
    );
  }
}
export default Blog;