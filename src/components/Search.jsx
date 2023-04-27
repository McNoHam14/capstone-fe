import React from "react";

const Search = () => {
  return (
    <div>
      <p>SHOW ME</p>
      <div>
        <span>SPORTS</span>

        <select name="sports" id="sports-dropdown">
          <option value="football">
            Football
            <select name="football" id="football-dropdown">
              <option value="5-a-side">5 a side</option>
              <option value="11-a-side">11 a side</option>
            </select>
          </option>

          <option value="tennis">Tennis</option>
          <option value="running">Running</option>
        </select>

        <span>FAMILY</span>
        <select name="family" id="family-dropdown">
          <option value="newborn??">Newborn</option>
          <option value="infant">Infant</option>
          <option value="toddler">Toddler</option>
          <option value="kids">Kids</option>
          <option value="teens">Teens</option>
        </select>

        <span>CULTURE</span>
        <select name="culture" id="culture-dropdown">
          <option value="music">Music</option>
          <option value="art">Art</option>
          <option value="drama">Drama (Theater, Play, Opera)</option>
          <option value="dance">Dance</option>
        </select>

        <span>FOOD/DRINK</span>
        <select name="food-drink" id="food-drink-dropdown">
          <option value="restaurant">
            Restaurant (openings, tasting, menu change)
          </option>
          <option value="street-food">Street Food</option>
          <option value="wine">Wine</option>
          <option value="alcohol">Beer, Ale, Cider ??</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
