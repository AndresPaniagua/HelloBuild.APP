import React from "react";
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";

import GithubLogin from "../GithubAccount/GithubLogin";
import Repositories from "../RepositoryList/Repositories";
import FavRepositories from "../FavReposList/FavRepositories";


const GithubHome = ({ user, isLogged, showListProp, gitLogin, repositoryList }) => {
    const dispatch = useDispatch();

    return (
        !gitLogin ? (
            <GithubLogin />
        ) : (
            showListProp ? (
                <Repositories />
            ) : (
                <FavRepositories />
            )
        )
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        isLogged: state.isLogged,
        showListProp: state.showList,
        gitLogin: state.gitLogin,
        repositoryList: state.repositoryList
    };
};

export default connect(mapStateToProps)(GithubHome);