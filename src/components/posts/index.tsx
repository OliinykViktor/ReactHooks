import React, { ChangeEvent, useMemo, useState, useTransition } from "react";

import { ColorRing } from  'react-loader-spinner'

import {data} from '../../generated'

interface Post {
    _id:string,
    name:string
}

const Posts:React.FC = () => {
    const [text, setText] = useState<string>('');
    const [posts, setPost] = useState<Post[]>(data);
    const [isPending, startTransition] = useTransition();


    const filteredPost = useMemo(() => {
        return posts.filter((item) => item.name.toLowerCase().includes(text));
    }, [text]);

    const onValueChange = (e: ChangeEvent<HTMLInputElement>):void => {
        startTransition(():void => setText(e.target.value))
    }

    const style: React.CSSProperties={
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
    }

    const colorRing = <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />;
    return (
        <div style={style}>
            <input type="text" value={text} onChange={onValueChange} /> 

            <hr />

            <div >
                {isPending? colorRing : filteredPost.map(post =>(
                    <div style={{marginTop:'20px', background:'white', borderRadius: '7px'}} key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>  
        </div>
    );
};

export default Posts;