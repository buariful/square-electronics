import React from 'react';

const Loading = () => {
    return (
        <div className=' min-h-screen'>
            <button className="btn loading absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">loading...</button>
        </div>
    );
};

export default Loading;