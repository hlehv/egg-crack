import React from 'react';
import egg from '../images/egg.jpg'
import crackedEgg from '../images/eggCracked.jpg'
import goldOpen from '../images/openEggGold.jpg'
import emptyOpen from '../images/openEggEmpty.jpg'

let style = {
    margin: '2px'
}
function Egg(props){
    if (props.state==='cracked')
    {
        return(
            <img src={crackedEgg} style={style} alt={'crackedEgg'} onClick={props.onClick}/>
        )
    }
    else if (props.state==='open' && props.golden) {
        return(
            <img src={goldOpen} style={style} alt={'goldEgg'} onClick={props.onClick}/>
        )
    }
    else if(props.state==='open' && !props.golden){
        return(
            <img src={emptyOpen} style={style} alt={'goldEgg'} onClick={props.onClick}/>
        )
    }
    else{
        return(
            <img src={egg} style={style} alt={'egg'} onClick={props.onClick}/>
        )
    }
}

export default Egg;