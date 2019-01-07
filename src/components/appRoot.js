import React, { PureComponent } from 'react';
import postData from '../../data/post.md';

export default class extends PureComponent {
    state = {
        count: 0
    }

    render() {
        const { heading, bio } = this.props;

        return (
            <div className="profile">
                <h1>{heading}</h1>
                <img src={require("../images/test.jpg")} />
                <div className="content" dangerouslySetInnerHTML={{
                    __html: postData.__content
                }}>
                </div>
            </div>
        )
    }
}