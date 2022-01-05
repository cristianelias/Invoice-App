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
      className="invoice-filter-dropdown"
    >
      <legend>
        <span className="invoice-filter-dropdown__trigger">
          {showFullInfo ? `Filter by status` : `Filter`}
        </span>
        <img
          className={
            !filtersVisibility
              ? "invoice-filter-dropdown__arrow-down"
              : "invoice-filter-dropdown__arrow-up"
          }
          src={iconArrowDown}
          alt="Arrow icon. Click to display filters."
        />
      </legend>
      <fieldset
        className={`invoice-filter-dropdown__content ${
          !filtersVisibility
            ? "invoice-filter-dropdown__content--invisible"
            : ""
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </fieldset>
    </div>
  );
};

export default InvoiceFilterDropdown;
