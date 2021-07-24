import StarCounting from '../StarCounting/starCounting'
import QuestionText from '../QuestionText/questionText';
import {Button} from 'react-bootstrap'
import React from 'react';
import * as axios from 'axios'
const MakeQuestion = () => {
    



    

    const [starCount, setStarCount] = React.useState("0");
    const [email, setEmail] = React.useState(" ");
    const [text, setText] = React.useState(" ");



    const handleClick = async (val) =>{

        const response = await axios({
            method: 'post',
            url: 'http://52.14.81.170/question',
            data: {
              email: email,
              score: starCount,
              text: text
            }
        })

        setStarCount("0")
        setEmail(" ")
        setText(" ")
       
    }

    return (
        <div>
            <StarCounting function={setStarCount}/>
            <QuestionText emailValue={email} functionEmail={setEmail} textValue={text} functionText={setText}/>
            <Button onClick={handleClick} variant="primary">Enviar</Button>{' '}

            <h1>{starCount}</h1>
            <h1>{text}</h1>
            <h1>{email}</h1>
        </div>

    );
};


export default MakeQuestion;