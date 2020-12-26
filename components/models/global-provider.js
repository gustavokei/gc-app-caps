let GlobalContext = React.createContext();

let initialState = {
  isAuth: false,
  char: 0,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "auth":
      return { ...state, isAuth: true };
    case "selectChar":
      return { ...state, char: action.payload };
    case "prevChar":
      return { ...state, char: state.char - 1 };
    case "nextChar":
      return { ...state, char: state.char + 1 };
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
