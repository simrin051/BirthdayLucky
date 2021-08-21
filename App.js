import "./styles.css";
import React, { useState } from "react";
import bg from "/src/bg.svg";
import happy from "/src/happy.svg";
import sad from "/src/sad.svg";

var dateInput = "";
var result = "";
export default function App() {
  const [dateInputnum, setDateInput] = useState(new Date());
  const [luckyNumber, setLuckyNumber] = useState({ count: 1 });
  const [expressionImage, setExpressionImage] = useState("");
  const [result, setResult] = useState("");
  return (
    <div
      className="parallax"
      style={{
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        backgroundImage: `url('${bg}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="bodyContent">
        <div className="titleOfThePage">
          <div class="question">
            <h2>Is Your Birthday Lucky?</h2>
          </div>
          <a href="#birthdayDetails">
            <div class="scroll">Scroll Down</div>
          </a>
        </div>
        <section id="birthdayDetails">
          <p>
            <h2>Enter your Birthday Date and lucky number to continue</h2>
          </p>
          <label for="birthdayDate">Enter the birthday date</label>
          <input
            type="Date"
            id="birthdayDate"
            onChange={(event) => {
              this.dateInput = event.target.value;
            }}
          />
          <label for="luckyNumber">Enter the lucky number</label>
          <input
            type="number"
            id="luckyNumber"
            onChange={(event) => {
              setLuckyNumber(event.target.value);
              console.log("Event " + event.target.value);
            }}
          />
          <button type="button" value="Check" onClick={checkBirthdayDate}>
            Check
          </button>
          <p>{result}</p>
          <img class="expressionImage" src={expressionImage}></img>
        </section>
      </div>
    </div>
  );

  function checkBirthdayDate() {
    console.log(this.dateInput + "values" + this.luckyNumber.value);
    var dateInputArr = this.dateInput.split("-");
    var sumOfNumbers = 0;
    for (var i = 0; i < dateInputArr.length; i++) {
      sumOfNumbers = Number(sumOfNumbers) + Number(dateInputArr[i]);
    }
    if (sumOfNumbers % this.luckyNumber.value == 0) {
      setResult("Yep! You are lucky");
      setExpressionImage(happy);
    } else {
      setResult("Hayy! Not Lucky!");
      setExpressionImage(sad);
    }
  }
}
