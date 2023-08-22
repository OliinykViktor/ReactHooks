import {Container} from 'react-bootstrap';
import { useState, useEffect, useCallback, useMemo, useReducer } from 'react';

import RenderImg from './renderImg';
import reducer from '../../helpers/reducer';

const Slider = ({initial}) => {

    const [autoplay, dispatch] = useReducer(reducer, initial, init);
    console.log(autoplay);

    function init(initial) {
        return{autoplay: initial}
    }

    const [state, setState] = useState({
            slide: 0,
            // autoplay:false,
        })


    useEffect(() => {
        document.title = `Slide: ${state.slide}`;
    }, [state.slide]);
    
    const getSomeImages = useCallback (() => {
        // console.log('fetching');
        return[
            'https://img.freepik.com/premium-photo/forest-with-two-magical-portals-in-a-clearing-with-pink-misty-smoke-around-3d-illustration_76964-3822.jpg?w=1380',
            'https://img.freepik.com/premium-photo/forest-with-two-magical-portals-in-a-clearing-with-pink-misty-smoke-around-3d-illustration_76964-3822.jpg?w=1380'
        ]
    }, [])
    
    const totalSlides = (num) =>{
        // console.log('countig...');
        return num + 10
    }

    const total = useMemo(() => {
        return totalSlides(state.slide)
    },[state.slide])

    const style = useMemo(() => ({
        backgroundColor: state.slide > 7?'red':'green',
    }),[state.slide])



    // const toggleAutoplay = () => {
    //     setState((prevState) => ({
    //         ...prevState,
    //         autoplay: !prevState.autoplay,
    //     }))
    // }

    const changeSlide = (value) => {
        setState((prevState) => ({
            ...prevState,
            slide : prevState.slide + value,
        }))
    }

    return (
        <Container className='pt-5'>
            <div className="slider w-50 m-auto">
                <RenderImg getSomeImages = {getSomeImages}/>
                <div style={style} className="text-center mt-5 rounded text-body">Active slide {state.slide} <br/> {autoplay.autoplay ? 'auto' : null}</div>
                <div className="text-center mt-3 bg-succes rounded text-body" >{total}</div>
                <div className="buttons mt-3 d-flex justify-content-center">
                
                    <button 
                        className="btn btn-primary me-2 bg-warning text-body"
                        onClick={() => changeSlide(-1)}>Add</button>
                    <button 
                        className="btn btn-primary me-2 bg-warning text-body"
                        onClick={() => changeSlide(1)}>Sub</button>
                    <button 
                        className="btn btn-primary me-2 bg-warning text-body"
                        onClick={() => dispatch({type: 'toggle'})}>toggle</button>
                    <button 
                        className="btn btn-primary me-2 bg-warning text-body"
                        onClick={() => dispatch({type: 'fast'})}>fast</button>
                    <button 
                        className="btn btn-primary me-2 bg-warning text-body"
                        onClick={() => dispatch({type: 'slow'})}>slow</button>
                    <button 
                        className="btn btn-primary me-2 bg-warning text-body"
                        onClick={(e) => dispatch({type: 'custom', payload: e.target.textContent})}>1200</button>
                </div>
            </div>
        </Container>
    )
}

export default Slider