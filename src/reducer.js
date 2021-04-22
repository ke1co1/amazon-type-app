export const initialState = {
  basket: [],
  user: null,
};

// // selector
//loops through each item and returns sum of total to the amount, init val 0
export const getBasketTotalValue = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //removes items from cart with same id one at a time
      //first find the index of the item within the basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //copy basket into temp variable
      let newBasket = [...state.basket];

      //now from the items in the basket we will remove the item referenced in the index of the basket
      if (index >= 0) {
        newBasket.splice(index, 1);
        //error
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`
        );
      }
      //update state with newBasket
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
