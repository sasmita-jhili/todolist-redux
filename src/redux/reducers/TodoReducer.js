const initialState = { listData: [] };

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      const { id, tododata } = action.payload;
      return {
        ...state,
        listData: [
          ...state.listData,
          {
            id: id,
            data: tododata,
          },
        ],
      };
    case "DELETE_TO_DO":
      const deleteItem = state.listData.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        listData: deleteItem,
      };
    default:
      return state;
  }
};
