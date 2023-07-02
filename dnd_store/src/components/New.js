import React from "react";
import "./CSS/New.css";

function New({onFormSubmited}) {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new 
        FormData(e.target))
    fetch("http://localhost:3000/shop", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(r=>r.json())
    .then(responseForm => onFormSubmited(responseForm))
  };
  return (
    <form onSubmit={onSubmit} className="newItemForm">
      <label>
        Name:
        <input name="name"></input>
      </label>
      <label>
        Cost:
        <input name="cost"></input>
      </label>
      <label>
        Damage:
        <input name="damage"></input>
      </label>
      <label>
        Weight:
        <input name="weight"></input>
      </label>
      <label>
        Properties:
        <textarea name="properties"></textarea>
      </label>
      <label>
        Type:
        <select name="type">
          <option className="simpleWeapons" name="simpleWeapons">Simple Weapon</option>
          <option className="martialWeapons" name="martialWeapons">Martial Weapon</option>
          <option className="lightArmor" name="lightArmor">Light Armor</option>
          <option className="mediumArmor" name="mediumArmor">Medium Armor</option>
          <option className="heavyArmor" name="heavyArmor">Heavy Armor</option>
        </select>
      </label>
      <label>
        Image:
        <input name="image"></input>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default New;
