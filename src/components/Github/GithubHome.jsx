import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import GithubLogin from "../GithubAccount/GithubLogin";
import Repositories from "../RepositoryList/Repositories";
import FavRepositories from "../FavReposList/FavRepositories";
import MyProfile from "../Profile/MyProfile";
import MyFavoritesRepos from "../MyFavoritesRepos/MyFavoritesRepos";

const GithubHome = ({
  user,
  isLogged,
  showListProp,
  gitLogin,
  showProfile,
  showSelected
}) => {
  const dispatch = useDispatch();

  return !gitLogin ? (
    <GithubLogin />
  ) : showProfile ? (
    <MyProfile />
  ) : showSelected ? (
    <MyFavoritesRepos />
  ) :
  showListProp ? (
    <Repositories />
  ) : (
    <FavRepositories />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogged: state.isLogged,
    showListProp: state.showList,
    gitLogin: state.gitLogin,
    showProfile: state.showProfile,
    showSelected: state.showSelected,
  };
};

export default connect(mapStateToProps)(GithubHome);
