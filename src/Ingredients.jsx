import "./ingredient.css"
export default function Ingredient(){
    let arr=["2-3 large eggs","Salt, to taste","Pepper, to taste","1 tablespoon of butter or oil","Optional fillings: cheese, diced vegetables, cooked meats, herbs"]
    return <div className="inc">
        <h3>  Ingredients</h3>
        <ul>
            {arr.map((el,i,arr)=>{
                return <li key={i}> {el}</li>
            })}
        </ul>
        <hr />
    </div>
}