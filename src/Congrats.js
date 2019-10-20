import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    return(
        props.success === true ? 
            <div data-test = "component-congrats">
                <span data-test = "congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        :
        <div data-test = "component-congrats"></div>
    );
}

Congrats.propTypes = {
    success : PropTypes.bool
}

export default Congrats;