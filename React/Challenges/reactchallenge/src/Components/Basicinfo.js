import React from 'react';
//functional component
const Basicinfo = (props) => {
    return (
        <div className="contacts">
         <h1>{props.data.name}</h1>
         <p>{props.data.number}</p>
         <p>{props.data.DOB}</p>
        </div>
    )
}

// //deconstructing
// const Basicinfo = ({data}) => {
//     return (
//         <div>
//          <h1>{data.name}</h1>
//          <p>{data.number}</p>
//          <p>{data.DOB}</p>
//         </div>
//     )
// }

export default Basicinfo