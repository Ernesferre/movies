import React from "react";

const SortingOptions = () => {
  return (
    <select
      color="black"
      // value={this.state.value}
      // onChange={this.handleChange}
    >
      <option value=""></option>
      <option value="name_asc" color="black">
        A -> Z
      </option>
      <option value="name_desc">Z -> A</option>
      <option value="rating">Rating</option>
    </select>
  );
};

export default SortingOptions;
