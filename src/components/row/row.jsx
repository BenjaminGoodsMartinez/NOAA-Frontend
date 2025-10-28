import { Link } from 'react-router-dom';
import { Button } from '../buttons/button';
import './row.css'

export const Row = ({nameofButtons, buttonFunctions, buttonColor, links}) => {

    return (
        <div className='row'>
            {nameofButtons.map((name, index) => (
                <div key={index}>
                    <Link to={links[index]}>
                       <Button
                        buttonName={name}
                        buttonFunctions={buttonFunctions[index]}
                        buttonColor={buttonColor}      
                    />
                    </Link>
                 
                </div>
            ))}
        </div>
    )
}


export default Row;