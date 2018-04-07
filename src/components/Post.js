import React from 'react';
import { Div, Img } from 'glamorous';

const Paragraph = props => (
    <React.Fragment>
        <span dangerouslySetInnerHTML={{ __html: props.content }} />
        <br />
        <br />
    </React.Fragment>
);
  
const Post = props => {
    window.scrollTo(0,0);
    const locationState = props.history.location.state
    if (!locationState || !locationState.fromPreview){
      props.history.push('/')
      return (<div/>);
    }
    const contentTypes = {
      paragraph: 'paragraph',
      blockQuote: 'block_quote'
    }
    return (
        <React.Fragment>
            <Div>
                <br/>
                <Img
                    borderRadius="10px"
                    width='50%'
                    height='50%'
                    src={locationState.post.featured_media.url}
                />
            </Div>
            <Div width="75%">
                <br/>
                <Div textAlign='left'>
                    <button onClick={() => props.history.push('/')}>MAIN PAGE</button>
                </Div>
                <h1>{locationState.post.title}</h1>
                <br/>
                <Div textAlign="justify">
                    {locationState.post.content.map((content, index) => {
                    switch (content.type) {
            
                        case contentTypes.blockQuote:
                        return (
                            content.components.map((component, componentIndex) => (
                            <React.Fragment key={`${index}-${componentIndex}`}>
                                <blockquote dangerouslySetInnerHTML={{ __html: component.text }} />
                                <br />
                            </React.Fragment>
                            ))
                        )
                        default:
                        return <Paragraph key={index} content={content.text} />
                    }
                    })}
                </Div>
                <Div textAlign="left">
                    <p>
                        Authors: {locationState.post.authors} <br/>
                        Date: {locationState.post.date}
                    </p>
                    <br/>
                </Div>
            </Div>
        </React.Fragment>
    )
}
  
export default Post;