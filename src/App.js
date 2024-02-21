import React from "react";
import { useMemo, useState } from "react";
import './style.css'

// set default values for weight and height

const default_weight  = 44;
const default_height = 120;

function App() {
  const [height, setHeight] = useState(default_height)
  const [weight, setWeight] = useState(default_weight)

  const onHeightChange = (event) => {
      const inputHeight = event.target.value;
      setHeight(inputHeight);
  }

  const onWeightChange = (event) => {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  const bmi_status_calculation = (output) => {
    let bmi_status = ""
    let bmi_sign_class = "black"
    if(output < 18.5){
      bmi_status = "Underweight"
      bmi_sign_class = "blue"
    }
    else if(output> 18.5 && output<= 24.9){
      bmi_status = "Normal Weight"
      bmi_sign_class = "green"
    }
    else if(output> 25 && output<= 29.9){
      bmi_status = "Overweight"
      bmi_sign_class = "yellow"
    }
    else if(output> 30 && output<= 34.9){
      bmi_status = "Obesity Class I"
      bmi_sign_class = "red"
    }
    else if(output> 35 && output<= 39.9){
      bmi_status = "	Obesity Class II"
      bmi_sign_class = "red"
    }
    else{
      bmi_status = "Obesity Class III"
      bmi_sign_class = "red"
    }
    return [bmi_status, bmi_sign_class];
  } 
  return (
    <main>
      <h1> BMI CALCULATOR </h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          step="1"
          min="120"
          max="220"
        />
      </div>
      <div className="output-section">
        <p> Your BMI </p>
        <p className="output"> {output} </p>
        <p className="status"><span className={bmi_status_calculation(output)[1]}>〇</span> {bmi_status_calculation(output)[0]} </p>
      </div>
    </main>
  );
}

export default App;
