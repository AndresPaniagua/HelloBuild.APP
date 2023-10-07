import React from "react";
import { connect } from 'react-redux';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';

import "../../styles/repositories.css";


const FavRepositories = ({ user, isLogged, showList, favRepositoryList }) => {

  const goBodyTemplate = (repository) => {
    return (
      <a href={repository.svnUrl} target="_blank" rel="noopener noreferrer">
        <Tag severity={'success'}>
          <i className="pi pi-link"></i>
        </Tag>
      </a>);
  };

  return (
    <div className="card-datatable">
      <DataTable value={favRepositoryList} paginator rows={5} tableStyle={{ width: '70vw' }}>
        <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
        <Column field="description" header="Description" sortable style={{ width: '25%' }}></Column>
        <Column header="Go" body={goBodyTemplate} style={{ width: '5%', textAlign: 'center' }}></Column>
      </DataTable>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    showList: state.showList,
    favRepositoryList: state.favRepositoryList
  };
};

export default connect(mapStateToProps)(FavRepositories);