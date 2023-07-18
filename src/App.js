import { useState } from "react";
import { useEffect } from "react";
function App() {

  const initialTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(initialTime)

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  const styleDay = {
    color: "green"
  };
  const styleNight = {
    color: "blue"
  };

  return (
    <div>
      <h3>The time is :
        <i style={((new Date().getHours() < 18) && (new Date().getHours() > 4)) ? styleDay : styleNight}> {time}</i> now...
      </h3>
    </div>
  );
}

export default App;
