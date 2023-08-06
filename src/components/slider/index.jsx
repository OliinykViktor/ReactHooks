import {Container} from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react';

import RenderImg from './renderImg';

const Slider = () => {

    const [state, setState] = useState({
            slide: 0,
            autoplay:false,
        })

    useEffect(() => {
        document.title = `Slide: ${state.slide}`;
    }, [state.slide]);
    
    const getSomeImages = useCallback (() => {
        console.log('fetching');
        return[
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fforest.html&psig=AOvVaw1bWjYuLuUdZsT_f8LAXfkE&ust=1691411884294000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDE5LmGyIADFQAAAAAdAAAAABAE',
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fforest.html&psig=AOvVaw1bWjYuLuUdZsT_f8LAXfkE&ust=1691411884294000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDE5LmGyIADFQAAAAAdAAAAABAE'
        ]
    }, [])

    const toggleAutoplay = () => {
        setState((prevState) => ({
            ...prevState,
            autoplay: !prevState.autoplay,
        }))
    }

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
                <div className="text-center mt-5 bg-warning rounded text-body">Active slide {state.slide} <br/> {state.autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3 d-flex justify-content-center">
                
                    <button 
                        className="btn btn-primary me-2 bg-warning text-body"
                        onClick={() => changeSlide(-1)}>Add</button>
                    <button 
                        className="btn btn-primary me-2 bg-warning text-body"
                        onClick={() => changeSlide(1)}>Sub</button>
                    <button 
                        className="btn btn-primary me-2 bg-warning text-body"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

export default Slider