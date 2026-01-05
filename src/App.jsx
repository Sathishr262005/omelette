import "./app.css";
import ImageCom from "./image";
import Simple from "./Simple";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";


export default function AppComponent(){
    return <div className="outer">
        <div className="inner">
            <ImageCom></ImageCom>
            <Simple></Simple>       
            <Ingredients></Ingredients>
            <Instructions></Instructions>
            <Nutrition></Nutrition>
        </div>
    </div>

}