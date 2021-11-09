
import handleToastNotification from "./handleToastNotification.util"

function App() {

  return (
    <div className="App">
      <div>
        <button onClick={() => handleToastNotification('info')}>Notify info!</button>
        <button onClick={() => handleToastNotification('success')}>Notify success!</button>
      </div>
    </div>
  );
}

export default App;
