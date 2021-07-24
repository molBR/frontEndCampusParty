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
            url: 'https://v5sgx2btyj.execute-api.us-east-2.amazonaws.com/question',
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
            <StarCounting starCount = {starCount} function={setStarCount}/>
            <QuestionText emailValue={email} functionEmail={setEmail} textValue={text} functionText={setText}/>
            <Button onClick={handleClick} variant="primary">Enviar</Button>{' '}
        </div>

    );
};


export default MakeQuestion;