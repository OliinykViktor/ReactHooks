import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const RenderImg = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(()=>{
        setImages(getSomeImages())
    }, [getSomeImages])
    return (
        <>
          {images.map((url, i) => {
            <img className="d-block w-100" src={url} alt="slide" key={i}/>
          })}  
        </>
    );
};

RenderImg.propTypes ={
    getSomeImages: PropTypes.func
}

export default RenderImg;