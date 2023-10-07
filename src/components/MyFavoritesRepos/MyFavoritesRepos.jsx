import React from "react";
import { connect } from 'react-redux';

import GitTable from "../__shared/GitTable";
import "../../styles/repositories.css";

const MyFavoritesRepos = ({ MySelectedFavRepos }) => {

  return (
    <GitTable list={MySelectedFavRepos} title={"My Selected Repositories"} isSeleted={false} />
  );
}

const mapStateToProps = (state) => {
  return {
    MySelectedFavRepos: state.MySelectedFavRepos
  };
};

export default connect(mapStateToProps)(MyFavoritesRepos);