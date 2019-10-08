import React, { useState } from 'react';
import Item from './Item';

import { CSSTransition } from 'react-transition-group';


function Carousel(props) {
    const [item,saveItmens] = useState (props.items);
    const [active,saveActive] = useState (props.active);
    

    const generateItems = () => {
        var items = [];
        var level;
        
        for (var i = active - 2; i < active + 3; i++) {
            var index = i;
            if (i < 0) {
                index = item.length + i;
            } else if (i >= item.length) {
                index = i % item.length;
            }
            level = active - i;
            items.push(
                <Item key={index} data={item[index]} level={level} />
                 );
        }
        return items;
    }

    const move= ()=> {
        var newActive = active;
        newActive--;
        setTimeout(()=>{
        saveActive(newActive < 0 ? item.length - 1 : newActive);
        },1500);
        }

     return (
        <div id="carousel" className="noselect" onMouseOver={()=>move()} >
            <CSSTransition in={true} timeout={200} className="direction">
              {()=>generateItems()}
           </CSSTransition >
        </div>
    );

}
export default Carousel;