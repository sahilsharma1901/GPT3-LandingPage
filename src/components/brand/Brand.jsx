import React from 'react';

import { Google, Slack, Atlassion, Dropbox, Shopify } from './imports';
import './Brand.css';


const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={Google} alt="Google"/>
            </div>
            <div>
                <img src={Slack} alt="Slack"/>
            </div>
            <div>
                <img src={Atlassion} alt="Atlassion"/>
            </div>
            <div>
                <img src={Dropbox} alt="Dropbox"/>
            </div>
            <div>
                <img src={Shopify} alt="Shopify"/>
            </div>
        </div>
    );
}

export default Brand;
