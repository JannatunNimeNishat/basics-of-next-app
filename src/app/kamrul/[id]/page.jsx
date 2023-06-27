"use client"
import React from 'react';

const SingleKamrulPage = ({params}) => {
    console.log(params);
    return (
        <div>
            this single karmul vi id: {params.id}
        </div>
    );
};

export default SingleKamrulPage;