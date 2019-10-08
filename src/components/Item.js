import React, {useSatet} from 'react';

function  Item (props) {
const className = "item level" + props.level;
return(
    <div className={className}>
          <img src={props.data.img} />
           <h3>{props.data.name}</h3>
           <p>{props.data.description}</p>
     </div>
    );
} export default Item;