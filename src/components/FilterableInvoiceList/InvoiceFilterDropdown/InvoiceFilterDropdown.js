/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// Components
import InvoiceFilterCheckbox from "./InvoiceFilterCheckbox/InvoiceFilterCheckbox";

// Assets
import iconArrowDown from "../../../assets/icon-arrow-down.svg";

// Styles
import "./InvoiceFilterDropdown.css";

import { useState } from "react";

const InvoiceFilterDropdown = (props) => {
  const { showFullInfo, statusFilters } = props;

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
        {statusFilters.map((filter) => {
          return (
            <InvoiceFilterCheckbox
              key={filter.status}
              status={filter.status}
              text={filter.displayText}
              active={filter.active}
              updaterFn={filter.updaterFn}
            />
          );
        })}
      </fieldset>
    </div>
  );
};

export default InvoiceFilterDropdown;
