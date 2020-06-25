import React from 'react';

const BackButton= ( ) => {

    function backButtonClick(){
        window.history.back();
    }
   
    return (
            <button type="button" onClick={ backButtonClick } className="btn">
                <i className="arrow left"></i>Back
            </button>
    )
}

export default BackButton;