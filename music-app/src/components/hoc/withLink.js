/*HOC or High Order Component: is an advance technique in React for reusing component logic.
A High Order Component : is a function that takes a component and returns a new component */

import React from 'react';
import {Link} from "react-router-dom";

const withLink = wrappedComponent => props => {
    const newProps = {
        ...props,
        video:{
            ...props.video,
            title:(
                <Link to={{pathname:`/${props.video.id}`, autoplay: true}}>
                    {props.video.title}
                </Link>
            )
        }
    };
    return <wrappedComponent{...newProps}/>
}
export default withLink;
