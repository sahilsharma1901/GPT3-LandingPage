import React from 'react';

import {Article} from "../../components";
import {Blog1, Blog2, Blog3, Blog4, Blog5} from "./imports";

import "./Blog.css";

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening,<br/>we are blogging about it</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imageURL={Blog1}/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imageURL={Blog2}/>
                    <Article imageURL={Blog3}/>
                    <Article imageURL={Blog4}/>
                    <Article imageURL={Blog5}/>
                </div>
            </div>
        </div>
    );
}

export default Blog;
