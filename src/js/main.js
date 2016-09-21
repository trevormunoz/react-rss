import React from 'react';
import { render } from 'react-dom';
import FeedWidget from './FeedWidget';

const feedAddr = 'https://news.docnow.io/feed';
const mountPoint = document.getElementById('feed');

if (mountPoint) {
  render(
    <FeedWidget feed={feedAddr} />,
    mountPoint
  );
  window.console.log("main.js loaded");
}
