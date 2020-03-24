import React from 'react';
import DataField from "../components/RIghtSection/RightSectionComponent/DataField"

const RenderData = ({props}) => (
    <>
        {props.map(element => (
            <DataField data={element}/>
        ))}
    </>
)

export default RenderData





// export default function DataField(props) {

//     const [inputName] = useState(props.data.name)
//     const [inputValue] = useState(props.data.vaue)

//     if (props) {
//         console.log(props)
//         return (
//             <>
//             <div>
//                 <h3>{inputName}</h3>

//                 <p>{inputValue}</p>

//             </div>
//             </>
//         )
//     }


// }