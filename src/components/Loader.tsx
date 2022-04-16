import React from 'react';

const Loader = () => {
    return (
        <div className='flex w-full justify-center my-10' data-testid="loader">
            <div style={{ borderTopColor: 'transparent' }}
                 className="w-10 h-10 border-4 border-blue border-solid rounded-full animate-spin" />
        </div>
    );
};

export default Loader;
