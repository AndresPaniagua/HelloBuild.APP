import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getUserInfo } from "../../utils/actions";
import { showLoader, closeLoader } from "../../utils/helper";

import userPicture from "../../assets/images/userProfile.png";
import gitIcon from "../../assets/images/gitIconPurple.png";
import keyIcon from "../../assets/images/keyIcon.png";
import HelloIcon from "../../assets/images/LogoHelloBuild.jpg";
import "../../styles/profile.css";

const MyProfile = ({ user, gitUser }) => {
    const [newToken, setNewToken] = useState("");
    const [nameUser, setNameUser] = useState("");

    useEffect(async () => {
        if (gitUser.token && gitUser.token.length >= 8) {
            const firstFour = gitUser.token.substring(0, 4);
            const lastFour = gitUser.token.substring(gitUser.token.length - 4);
            const middleAsterisks = '*'.repeat(4);
            const maskedToken = `${firstFour}${middleAsterisks}${lastFour}`;
            setNewToken(maskedToken);
        }
        if (user) {
            showLoader("Loading...");
            const result = await getUserInfo(user.email, user.pass);
            if (result.statusResponse) {
                setNameUser(result.data.name);
            }
            closeLoader();
        }
    }, []);

    return (
        <div className="profile-Container">
            <div className="user-information">
                <div className="userPicture">
                    <img src={userPicture} />
                </div>
                <div className="userInfo">
                    <h1>{nameUser}</h1>
                    <h3>{user.email}</h3>
                </div>
            </div>
            <div className="user-features">
                <div className="userInfoCard-container">
                    <div className="cardInfo">
                        <div className="cardInfo-image">
                            <img src={gitIcon} />
                        </div>
                        <div className="cardInfo-Info">
                            <h2>Git Username</h2>
                            <p>{gitUser.username}</p>
                        </div>
                    </div>
                    <div className="cardLine purple"></div>
                </div>
                <div className="userInfoCard-container">
                    <div className="cardInfo">
                        <div className="cardInfo-image">
                            <img src={keyIcon} />
                        </div>
                        <div className="cardInfo-Info">
                            <h2>Git Access Token</h2>
                            <p>{newToken}</p>
                        </div>
                    </div>
                    <div className="cardLine yellow"></div>
                </div>
                <div className="userInfoCard-container">
                    <div className="cardInfo">
                        <div className="cardInfo-image">
                            <img src={HelloIcon} />
                        </div>
                        <div className="cardInfo-Info">
                            <h2>Visit HelloBuild</h2>
                            <p><a href="https://www.hellobuild.co" target="_blank">Visit</a></p>
                        </div>
                    </div>
                    <div className="cardLine blue"></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        gitUser: state.token
    };
};

export default connect(mapStateToProps)(MyProfile);