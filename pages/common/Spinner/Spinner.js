import React from 'react';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 border-indigo-500/100 border-t-white rounded-full" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
};

export default Spinner;