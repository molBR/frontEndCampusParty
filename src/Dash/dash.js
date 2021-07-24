import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ContentHandler from '../ContentHandler/contentHandler'
import React from 'react';
import "./dash.css"

const Dash = () => {
    const [contentValue, setContentValue] = React.useState("fazer_pergunta");



    const handleChange = (val) => {
        setContentValue(val)
    }

    return (
        <div>
            <form>
                <label htmlFor='genre'></label>
                <ToggleButtonGroup type='radio' defaultValue={'fazer_pergunta'} name='genre'  onChange={handleChange}>
                    <ToggleButton id="customStyleButton" value={'fazer_pergunta'}>Fazer Perguntas</ToggleButton>
                    <ToggleButton id="customStyleButton" value={'ver_perguntas'}>Informações</ToggleButton>
                </ToggleButtonGroup>
                <ContentHandler content={contentValue}></ContentHandler>
            </form>
        </div>

    );
};


export default Dash;
