import React from 'react';

const ResolveTask = ({ticket}) => {
    return (
        <div className='mt-5'>
        <div className='p-4 bg-[#e0e7ff] space-y-4 rounded-lg shadow-sm'>
            <h1 className='text-lg font-bold'>{ticket.title}</h1>
        </div>
        </div>
    );
};

export default ResolveTask;