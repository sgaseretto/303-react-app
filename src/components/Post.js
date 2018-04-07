import React from 'react';

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
                <br/>
                <h1>{locationState.post.title}</h1>
                <br/>
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
        </React.Fragment>
    )
}
  
export default Post;