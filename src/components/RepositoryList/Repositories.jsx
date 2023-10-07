import React from "react";
import { connect } from 'react-redux';

import GitTable from "../__shared/GitTable";
import "../../styles/repositories.css";

const Repositories = ({ user, isLogged, showList, repositoryList }) => {

  return (
    <GitTable list={repositoryList} title={"My Repositories"} />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    showList: state.showList,
    repositoryList: state.repositoryList
  };
};

export default connect(mapStateToProps)(Repositories);