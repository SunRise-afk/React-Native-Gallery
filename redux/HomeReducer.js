let initialState = {Data: null};

export const HomeReducer = (state = initialState, action) => {
  switch(action.type){
    case 'setImgData': {
      console.log('From Reducer', action);
      return {
        ...state,
        Data: action.imgData,
      };
    }
    default:{
      return state;
    }
  }
}
