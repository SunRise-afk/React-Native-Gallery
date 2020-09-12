let initialState = {isFetching: true, Data: null};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setImgData': {
      return {
        ...state,
        Data: action.imgData,
      };
    }
    case 'toggleIsFetching': {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default: {
      return state;
    }
  }
};

export const setImgDataAC = (imgData) => ({
  type: 'setImgData',
  imgData: imgData,
});
export const toggleIsFetchingAC = (isFetching) => ({
  type: 'toggleIsFetching',
  isFetching: isFetching,
});

export const getImgDataThunkCreator = () => {
  return async (dispatch) => {
    let responseRep;
    dispatch(toggleIsFetchingAC(true));
    let response = await fetch(
      'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    );
    responseRep = await response.json();
    dispatch(setImgDataAC(responseRep));
    dispatch(toggleIsFetchingAC(false));
  };
};
