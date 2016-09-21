import 'whatwg-fetch';
import React, { Component, PropTypes } from 'react';
import PostList from './PostList';

class FeedWidget extends Component {

  componentDidMount() {
    fetch(this.props.feed).then((res) => {
      window.console.log(res);
    }).catch((err) => {
      window.console.error(err);
    })
  }

  render() {
    return (
      <PostList />
    );
  }
}

FeedWidget.propTypes = {
  feed: PropTypes.string.isRequired
};

export default FeedWidget;
