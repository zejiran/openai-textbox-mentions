import * as React from 'react';
import Lottie from 'lottie-react';
import aiLogo from './../assets/ai-logo.json'

export default function Header() {
    return (
        <div className='text-container'>
            <h1>OpenAI Text Box Mentions</h1>
            <p className='regular-text'>This is an OpenAI GPT generator for storing mock
                users in Elasticsearch and show them in a React mentions style text box.</p>
            <Lottie animationData={aiLogo} loop={true} className='lottie' />
        </div>
    );
}
