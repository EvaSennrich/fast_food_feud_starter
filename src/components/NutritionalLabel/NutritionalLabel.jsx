import * as React from "react";
import { nutritionFacts } from "../../constants";
import "./NutritionalLabel.css";

export function NutritionalLabel({ item }) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{item.item_name}</h4>

      <ul className="fact-list">
        {nutritionFacts.map((fact) => (
          <NutritionalLabelFact item={item} fact={fact} />
        ))}
      </ul>
    </div>
  );
}

export function NutritionalLabelFact({ item, fact }) {
  return (
    <li className="nutrition-fact">
      {console.log(item[fact.attribute])}
      <span className="fact-label">{fact.label}</span> <span className="fact-value">{item[fact.attribute]}</span>
    </li>
  );
}

export default NutritionalLabel;
