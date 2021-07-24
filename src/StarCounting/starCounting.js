import ReactStars from 'react-stars'
import "./starCounting.css"
const StarCounting = (props) => {
    

    const ratingChanged = (val) => {
    
        props.function(val)
    }
    return (
            <div className="starCounting">
                O que você está achando da palestra? 
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={45}
                color2={'#ffd700'} />
            </div>

    );
};


export default StarCounting;