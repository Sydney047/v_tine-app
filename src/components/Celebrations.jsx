import wine from './image/celebration.svg';
import balloons from './image/balloons.svg';
import champagne from './image/champagne.svg';

export default function Celebration() {

    return (<>
        <div className="celebrations">
            <img src={ wine } alt="This is an image of wine pouring" className='wine' />
            <img src={ balloons } alt="This is an image of ballons" />
            <img src={ champagne } alt="This is an image of champagne" />
            <h2>It's A Date! 😁</h2>
        </div>
    </>)
}