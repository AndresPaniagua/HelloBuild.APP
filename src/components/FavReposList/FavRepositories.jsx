import React from "react";
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";


const FavRepositories = ({ user, isLogged, showList }) => {
    const dispatch = useDispatch();
  
    return (
      <div>My fav List</div>
    );
  }
  
  const mapStateToProps = (state) => {
    return {
      user: state.user,
      isLogged: state.isLogged,
      showList: state.showList
    };
  };
  
  export default connect(mapStateToProps)(FavRepositories);