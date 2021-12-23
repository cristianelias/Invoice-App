/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import iconArrowDown from "../../assets/icon-arrow-down.svg";

import { useState } from "react";

const InvoiceFilterDropdown = (props) => {
  const { showFullInfo } = props;

  const [filtersVisibility, setFilterVisibility] = useState(false);

  return (
    <div
      onClick={() => {
        setFilterVisibility(!filtersVisibility);
      }}
      className="invoice-filter-list-container"
    >
      <legend>
        <span className="invoice-filter-trigger">
          {showFullInfo ? `Filter by status` : `Filter`}
        </span>
        <img
          className={
            !filtersVisibility
              ? "invoice-filter-arrow-down"
              : "invoice-filter-arrow-up"
          }
          src={iconArrowDown}
          alt="Arrow icon. Click to display filters."
        />
      </legend>
      <fieldset
        className={`invoice-filter-list-inner-container ${
          !filtersVisibility ? "ninja" : ""
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </fieldset>
    </div>
  );
};

export default InvoiceFilterDropdown;
