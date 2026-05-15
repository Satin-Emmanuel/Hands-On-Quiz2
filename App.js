import React, { useState } from "react";

function App() {
  // Counter State
  const [count, setCount] = useState(0);

  // Message State
  const [message, setMessage] = useState("");

  // Increase Function
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Decrease Function
  const decreaseCount = () => {
    setCount(count - 1);
  };

  // Reset Function
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/514054370_9878923368897777_3657874579874479928_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=669761&_nc_eui2=AeHUXc5fWJKQMR-gKQsRrMWJDCG8qOwkQuwMIbyo7CRC7DLDsoskIO6_Ccy4ibwj8cwjh4KZ4MNwHVFLARYcTHEC&_nc_ohc=oBfm7n8g0HIQ7kNvwGO-ZdI&_nc_oc=Adr3-tA-4TM6SsOjRy3RXAkjw9NEJyIrNXbcUrJqdcgenEFZ1gQSt0kEMRfOlxl4qbs&_nc_zt=23&_nc_ht=scontent.fmnl25-4.fna&_nc_gid=5Qn4NnoPHgGPdGavJxE1nQ&_nc_ss=7b2a8&oh=00_Af7tt8pYOAvNPVVu2wtLw_O08i54N0K6GiG17VJhgF65pg&oe=6A0C5127')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
          color: "white",
          boxShadow: "0 0 20px red",
        }}
      >
        <h1 style={{ color: "#ff0000" }}>
          Bomba Na!
        </h1>

        {/* Counter Display */}
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
            color: "#f5f5f5",
          }}
        >
          {count}
        </h2>

        {/* Buttons */}
        <button
          onClick={increaseCount}
          style={buttonStyle}
        >
          Increase
        </button>

        <button
          onClick={decreaseCount}
          style={buttonStyle}
        >
          Decrease
        </button>

        <button
          onClick={resetCount}
          style={buttonStyle}
        >
          Reset
        </button>

        {/* Conditional Rendering */}
        {count >= 5 && (
          <h3
            style={{
              color: "#00ff99",
              marginTop: "20px",
            }}
          >
            Goal Reached!
          </h3>
        )}

        <hr
          style={{
            margin: "30px 0",
            borderColor: "#444",
          }}
        />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Type motorcycle message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            padding: "12px",
            width: "90%",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            marginBottom: "20px",
            fontSize: "16px",
          }}
        />

        {/* Live Message Display */}
        <h3 style={{ color: "#ff0000" }}>
          Garage Notes:
        </h3>

        <p
          style={{
            backgroundColor: "#222",
            padding: "15px",
            borderRadius: "10px",
            minHeight: "40px",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

// Button Style
const buttonStyle = {
  backgroundColor: "#ff0000",
  color: "white",
  border: "none",
  padding: "12px 20px",
  margin: "10px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 0 10px #ff0000",
};

export default App;