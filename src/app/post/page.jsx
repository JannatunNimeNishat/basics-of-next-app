"use client"
import React, { useEffect, useState } from 'react';


const page = async() => {

const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log(data))



// old
/* const [posts, setPosts] = useState()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[]) */


    return (
        <div>
            <h3>Number of Posts {posts?.length}</h3>
        </div>
    );
};

export default page;