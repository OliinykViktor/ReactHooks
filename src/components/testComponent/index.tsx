import React, { useState } from 'react';
import {flushSync} from 'react-dom'

const TestComponent: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [flag, setFlag] = useState<boolean>(false);

    function hadleClick():void {
        setTimeout(() =>{
            flushSync(() =>{
                setCount(c=>c+1);
            });
            flushSync(() =>{
                setFlag(f=>!f)
            })
        }, 100)
    }
    console.log('render');
    
    const style:React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '70px',
    }
    return (
        <div style={style}>
            <h1 style={{
                color: flag? 'green' : 'orange', 
                background: flag? 'orange' : 'green'}}>
                    {count}
            </h1>
            <button 
                style={{marginTop:20}} 
                onClick={hadleClick}>
                    Next
            </button>
        </div>
    );
};

export default TestComponent;