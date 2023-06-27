import React from 'react';

const layout = ({children}) => {
    return (
        <div className='grid grid-cols-6'>
            <div className='col-span-2 bg-red-300'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil voluptatum, voluptatem impedit, laudantium dolorum est mollitia hic quasi at, eaque cupiditate? Veritatis omnis totam placeat, cum nisi aspernatur molestiae?
            </div>
            <div className='col-span-4 '>
        {children}
            </div>
        </div>
    );
};

export default layout;