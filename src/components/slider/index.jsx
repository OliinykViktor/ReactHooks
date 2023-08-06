import {Container} from 'react-bootstrap';
import { useState, Component, useEffect } from 'react';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount(){
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     componentDidUpdate(){
//         document.title = `Slide: ${this.state.slide}`;
//     }
    
//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


const Slider = () => {

    const [state, setState] = useState({
            slide: 0,
            autoplay:false,
        })

    useEffect(() => {
        console.log('slide');
        document.title = `Slide: ${state.slide}`;
    }, [state.slide])    

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
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
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