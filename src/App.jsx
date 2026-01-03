import "./app.css"
import ImageCom from "./image"
import SimpleCom from "./Simple"
import Ingredient from "./Ingredients"
import Instructions from "./Instructions"
import Nutrition from "./Nutrition"

export default function Application(){
    return <div className="container">
        <div>
        <ImageCom></ImageCom>
        <SimpleCom></SimpleCom>
        <Ingredient></Ingredient>
        <Instructions></Instructions>
        <Nutrition></Nutrition>
        </div>
    </div>
}