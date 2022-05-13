export const addtodoAction = (inputData) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TO_DO",
      payload: {
        id: new Date().getTime().toString(),
        tododata: inputData,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TO_DO",
      id,
    });
  } catch (error) {
    console.log(error);
  }
};
