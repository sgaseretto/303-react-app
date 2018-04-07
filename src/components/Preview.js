import React from 'react';
import { Link } from "react-router-dom";
import glamorous, { Div, Img, Hr } from 'glamorous';


const Excerpt = props => (
    <Div 
        width='70%' 
        textAlign='justify'
    >
        <p>{props.excerpt}</p>
        <br/>
    </Div>
)

const Thumbnail = props => (
    <Div>
        <Img 
            borderRadius='10px'
            width='55%'
            height='55%'
            src={props.thumbnail}
        />
    </Div>
)

const Preview = props => (
    <React.Fragment>
        <br/>
        <Thumbnail thumbnail={props.post.thumbnail}/>
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
  