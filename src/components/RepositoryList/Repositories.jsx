import React from "react";
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";


const Repositories = ({ user, isLogged, showList }) => {
    const dispatch = useDispatch();
  
    return (
      <div>List</div>
    );
  }
  
  const mapStateToProps = (state) => {
    return {
      user: state.user,
      isLogged: state.isLogged,
      showList: state.showList
    };
  };
  
  export default connect(mapStateToProps)(Repositories);