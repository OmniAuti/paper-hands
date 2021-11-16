import {useState} from 'react'

import NewsFeed from '../components/NewsFeed'

const News = (props) => {


  return (
    <div>
      <h1>News</h1>
      <NewsFeed props={props}/>
    </div>
  );
};

export default News;
