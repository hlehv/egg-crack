import React from 'react';
function Description(props){
    if (props.step === 'pick')
    {
        return(
            <p> Pick an Egg </p>
        );
    }
    else if (props.step === 'choice')
    {
        return(
            <p>Look! An empty egg. You can switch, or stay with the same egg. Pick an egg </p>
        );
    }
    else if (props.step ==='correct'){
        return(
            <p> Eggcelent! You get a point </p>
        );
    }
    else if (props.step==='incorrect'){
        return(
            <p> Not quite, too bad. </p>
        );
    }

}

export default Description;