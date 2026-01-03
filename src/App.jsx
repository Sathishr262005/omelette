import "./app.css";
import ImageCom from "./image";

export default function AppComponent(){
    return <div className="cont">
        <div>
            <ImageCom></ImageCom>
            <h2 className="heading">Simple Omelette Recipe</h2>
            <p className="para1"> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

            <div className="prepare">
            <h6>  Preparation time </h6>
            <p className="para1">
            <ul>
                <li>Total: Approximately 10 minutes</li>
                <li>Preparation: 5 minutes</li>
                <li>Cooking: 5 minutes</li>
            </ul>
            </p>
            </div>
            <h3>Ingredients</h3>
            <ul className="ul2">
                <li>2-3 large eggs</li>
                <li>1/4 cup milk</li>
                <li>1/4 teaspoon salt</li>
                <li>1/8 teaspoon pepper</li>
                <li>1 tablespoon butter or oil</li>
            </ul>
            <hr />

            <h3>Instructions</h3>
            <ol>
                <li> <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
                You can add a tablespoon of water or milk for a fluffier texture.</li>
                <li><strong>Heat the butter or oil in a pan:</strong> Add the butter or oil to a pan and heat it over medium-low heat.</li>
                <li><strong>Fill the pan with the eggs:</strong> Pour the beaten eggs into the pan and let them cook until they start to set.</li>
                <li><strong>Flip the omelette:</strong> Gently flip the omelette and cook for another minute or two.</li>
                <li><strong>Remove from heat:</strong> Once cooked, remove the omelette from the pan and serve immediately.</li>
                <li><strong>Serve:</strong> Enjoy your perfectly cooked omelette with your favorite sides.</li>
            </ol>
            <hr />

            <h3>Nutrition</h3>

            <p className="para2"> The table below shows nutritional values per serving without the additional fillings.</p>

            
            </div>
    </div>

}