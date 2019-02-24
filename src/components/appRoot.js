import React, { PureComponent } from 'react';
// import postData from '../../data/post.md';
const imgPath = require("../images/test.jpg");

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
                <div className="content">
                    {bio}
                </div>
            </div>
        )
    }
}
