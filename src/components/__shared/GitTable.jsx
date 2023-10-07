import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { mySelectedReposList } from "../../redux/actions";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";

import "../../styles/repositories.css";

export default function GitTable({ list, title, isSeleted = true }) {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const saveInFavorites = (data) => {
    dispatch(mySelectedReposList(data));
    
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const goBodyTemplate = (repository) => {
    return (
      <a href={repository.svnUrl} target="_blank" rel="noopener noreferrer">
        <Tag severity={"success"}>
          <i className="pi pi-link"></i>
        </Tag>
      </a>
    );
  };

  const lockTemplate = (rowData, options) => {
    const icon = "pi pi-star-fill";
    const disabled = false;

    return (
      <Button
        type="button"
        icon={icon}
        disabled={disabled}
        className="p-button-sm p-button-text"
        onClick={() => saveInFavorites(rowData)}
      />
    );
  };

  const header = renderHeader();

  return (
    <div className="card-datatable">
      <h1>{title}</h1>
      <DataTable
        value={list}
        paginator
        rows={5}
        filters={filters}
        header={header}
        tableStyle={{ width: "70vw" }}
      >
        <Column
          field="name"
          header="Name"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="description"
          header="Description"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          header="Go"
          body={goBodyTemplate}
          style={{ width: "5%", textAlign: "center" }}
        ></Column>
        <Column
          hidden={!isSeleted}
          header="Fav"
          style={{ width: "5%", textAlign: "center" }}
          body={lockTemplate}
        ></Column>
      </DataTable>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
