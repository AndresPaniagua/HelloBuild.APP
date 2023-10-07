import React, { useState } from "react";
import Swal from "sweetalert2";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { getRepositories, getFavRepositories } from "../../utils/actions";
import { showLoader, closeLoader } from '../../utils/helper';
import { reposList, favReposList, showList, changeGitLogin } from "../../redux/actions";

import GithubIcon from "../../assets/images/github-Icon.png";
import '../../styles/signin.css';
import '../../styles/gitHubLogin.css';

const GithubLogin = () => {
    const [dataGit, setDataGit] = useState({
        username: "",
        token: ""
    });
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    const gitLoginRequest = async () => {
        const anyEmpty = Object.values(dataGit).some(value => value === "");
        if (anyEmpty) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'There seems to be some empty field!',
                timer: 5000
            });
            return;
        }

        const data = {
            username: dataGit.username,
            personalAccessToken: dataGit.token
        }

        showLoader("Loading...");

        const response = await getRepositories(userData.email, userData.pass, data);

        if (!response.statusResponse) {
            closeLoader();
            Swal.fire({
                icon: 'error',
                title: 'Oops...!',
                text: 'Something has gone wrong, please try again later!',
                timer: 15000
            });
            return;
        }

        dispatch(reposList(response.data));

        const responseFav = await getFavRepositories(userData.email, userData.pass, data);

        if (responseFav.statusResponse){
            dispatch(favReposList(responseFav.data));
        }
        
        dispatch(changeGitLogin(true));
        dispatch(showList(true));

        closeLoader();
    }

    return (
        <div className="signIn-Container">
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="git-form">
                            <div className="formGit-title">
                                <img src={GithubIcon} alt="GitHub Icon" className="gitIcon" />
                                <h2 className="formGit-title">Sign In to GitHub</h2>
                            </div>
                            <form method="POST" className="register-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="your_name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="your_name" id="your_name" placeholder="Enter your username" value={dataGit.username} onChange={(e) => setDataGit({ ...dataGit, username: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass">
                                        <i className="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="text" placeholder="Enter your personal access token" value={dataGit.token} onChange={(e) => setDataGit({ ...dataGit, token: e.target.value })} />
                                </div>
                                <div className="form-group form-button">
                                    <button type="button" name="signin" id="signin" className="form-submit" onClick={gitLoginRequest}>Get repositories</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(GithubLogin);