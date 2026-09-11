import { 
    useState, 
    Children, 
    isValidElement, 
    cloneElement
} from 'react'

import '../App.css'

const SpotlightContainer = ({ children, className }) => {
    const [event, setEvent] = useState(null);

    const onMouseMove = (e) => {
        setEvent(e);
    }

    const childrenWithProps = Children.map(children, child => {
        if( isValidElement(child) ) {
            return cloneElement(child, { event });
        }

        return child;
    })

    return (
        <div className={className} onMouseMove={onMouseMove}>
            { childrenWithProps }
        </div>
    )
}

export default SpotlightContainer