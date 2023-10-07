import React from "react";
import { connect } from 'react-redux';

import GitTable from "../__shared/GitTable";
import "../../styles/repositories.css";

const FavRepositories = ({ user, isLogged, showList, favRepositoryList }) => {

  return (
    <GitTable list={favRepositoryList} title={"My Starred Repositories"} />
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