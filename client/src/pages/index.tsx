import * as React from 'react';
import * as ReactDom from 'react-dom';
import axios from 'axios';
const { useEffect } = React;

export default () => {

    const handleSubmit = (e : any) => {
        e.preventDefault();
        const file = new FormData(e.target).get('fileToPass') as File;

        const toPost = new File([file], 'xinxin', {
            type: file.type
        });

        console.log(toPost);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="/acac" method="post" target="_self" encType="multipart" >
                <label htmlFor="file-input">请上传</label>
                <input type="file" name="fileToPass" id="file-input"/>
                <button type="submit">123</button>
            </form>
        </div>
    );
}