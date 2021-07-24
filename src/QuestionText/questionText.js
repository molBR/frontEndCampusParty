import { Form } from "react-bootstrap";

const QuestionText = (props) => {
    
   
    const changeText = (val) =>{
        props.functionText(val.target.value)
    }

    const changeEmail = (val) =>{
        props.functionEmail(val.target.value)
    }

    return (
        <div>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={props.emailValue} onChange={changeEmail} placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Faça sua pergunta</Form.Label>
                <Form.Control as="textarea" type="text" rows={4} value={props.textValue} onChange={changeText} />
            </Form.Group>
            </Form>
        </div>
    );
};


export default QuestionText;