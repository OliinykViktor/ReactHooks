import {Container} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

const Slider = () => {

    const [state, setState] = useState({
            slide: 0,
            autoplay:false,
        })

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
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {state.slide} <br/> {state.autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
  return (
        <Slider/>
  );
}

export default App;