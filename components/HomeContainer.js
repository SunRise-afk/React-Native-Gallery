import React from 'react';
import {connect} from 'react-redux';
import {Home} from '../components/Home';
import {getImgDataThunkCreator} from '../redux/HomeReducer';

const mapStateToProps = (state) => {
  return {
    isFetching: state.HomePage.isFetching,
    ImgData: state.HomePage.Data,
  };
};
const mapDispatchToProps = {
  getImgDataThunkCreator
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
