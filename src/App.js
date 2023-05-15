import { useReducer } from "react"

function App() {

  const initialState = { light: true }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'darkness':
        state = {...state, light: false }
        document.body.classList.add('dark')
        return
      case 'lightness':
        state = {...state, light: true }
        document.body.classList.remove('dark')
        return
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <div>
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label for="checkbox" class="checkbox-label">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <span class="ball" onClick={() => state.light ? dispatch({ type: 'darkness' }) : dispatch({ type: 'lightness' })}></span>
        </label>
      </div>
    </div>
  );
}
export default App;
