import React, { ChangeEvent, useMemo, useState, useDeferredValue} from "react";

import {data} from '../../generated'

interface Post {
    _id:string,
    name:string
}

const Posts:React.FC = () => {
    const [text, setText] = useState<string>('');
    const [posts, setPost] = useState<Post[]>(data);
    const deferredValue = useDeferredValue<string>(text);

    const filteredPost = useMemo(() => {
        return posts.filter((item) => item.name.toLowerCase().includes(deferredValue));
    }, [deferredValue]);

    const onValueChange = (e: ChangeEvent<HTMLInputElement>):void => {
        setText(e.target.value)
    }

    const style: React.CSSProperties={
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
    }
    return (
        <div style={style}>
            <input type="text" value={text} onChange={onValueChange} /> 

            <hr />

            <div >
                {filteredPost.map(post =>(
                    <div style={{marginTop:'20px', background:'white', borderRadius: '7px'}} key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}    
            </div>  
        </div>
    );
};

export default Posts;