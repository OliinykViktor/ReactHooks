import {Container} from 'react-bootstrap';
import './App.css';

const Slider = () => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide <br/></div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        >-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        >+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        >toggle autoplay</button>
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
