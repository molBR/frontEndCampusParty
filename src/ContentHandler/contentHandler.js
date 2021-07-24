import MakeQuestion from '../MakeQuestion/makeQuestion'
import ShowQuestion from '../ShowQuestion/showQuestion'
import "./contentHandler.css"
const ContentHandler = (props) => {


    return (
        <div className="contentHandler">
            { props.content === "fazer_pergunta" && <MakeQuestion  /> }
            { props.content === "ver_perguntas" && <ShowQuestion  /> }
        </div>

    );

}

export default ContentHandler