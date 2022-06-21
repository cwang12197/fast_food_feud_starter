import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list"> 
        /* WRITE CODE HERE */
        {nutritionFacts.map((nutritionFact) => (
          <NutritionalLabelFact
           label={nutritionFact.label}
            key={nutritionFact.id}
            attribute={props.item[`${nutritionFact.attribute}`]}
          />
        ))}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.attribute}</span>
    </li>
  )
}

export default NutritionalLabel
