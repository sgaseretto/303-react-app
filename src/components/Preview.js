import React from 'react';
import { Link } from "react-router-dom";


const Excerpt = props => (
    <p>{props.excerpt}</p>
)

const Preview = props => (
    <React.Fragment>
        <br/>
        <img src={props.post.thumbnail}/>
        <Link to={{
            pathname: props.post.id,
            state: {post: props.post, fromPreview: true}
        }} >
            <h3>{props.post.title}</h3>
        </Link>
        <Excerpt excerpt={props.post.excerpt}/>
    </React.Fragment>
  )
  
  export default Preview
  