let GlobalContext = React.createContext();

let initialState = {
  isAuth: false,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "auth":
      return { ...state, isAuth: true };
    default:
      return state;
  }
};

const GlobalProvider = (props) => {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

let GlobalConsumer = GlobalContext.Consumer;

export { GlobalContext, GlobalProvider, GlobalConsumer };
