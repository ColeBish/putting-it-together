import React, { useState } from 'react';
const Person = (props) => {
    const [birthDay, setBirthDay] = useState(props.initialAge);
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {birthDay}</p>
            <p>Hair Color: {props.haircolor}</p>
            <button onClick={(event) => setBirthDay(birthDay + 1)}>{props.name}'s Birthday Button</button>
        </div>
    );
}
export default Person;