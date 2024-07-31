import http from "http";

const message = "Sigurd's lommeregner";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); // Change Content-Type to text/html for HTML response
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Min lommeregner</title>
  <style>
    .button1 {
      position: absolute;
      top: 250px;
      left: 500px;
    }
    .button2 {
      position: absolute;
      top: 250px;
      left: 550px;
    }
    .button3 {
      position: absolute;
      top: 250px;
      left: 600px;
    }
    .button4 {
      position: absolute;
      top: 300px;
      left: 500px;
    }
    .button5 {
      position: absolute;
      top: 300px;
      left: 550px;
    }
    .button6 {
      position: absolute;
      top: 300px;
      left: 600px;
    }
    .button7 {
      position: absolute;
      top: 350px;
      left: 500px;
    }
    .button8 {
      position: absolute;
      top: 350px;
      left: 550px;
    }
    .button9 {
      position: absolute;
      top: 350px;
      left: 600px;
    }
    .button0 {
      position: absolute;
      top: 400px;
      left: 550px;
    }
    .buttonplus {
      position: absolute;
      top: 250px;
      left: 700px;
    }
    .buttonminu {
      position: absolute;
      top: 300px;
      left: 700px;
    }
    .buttongang {
      position: absolute;
      top: 350px;
      left: 700px;
    }
    .buttondivi {
      position: absolute;
      top: 400px;
      left: 700px;
    }
    .buttonclea {
      position: absolute;
      top: 400px;
      left: 480px;      
    }
    .buttondele {
      position: absolute;
      top: 350px;
      left: 430px; 
    }  
    .buttonligm {
      position: absolute;
      top: 400px;
      left: 600px;
    }
    .buttonpi {
      position: absolute;
      top: 250px;
      left: 450px;
    }    
    #display-talon {
      position: absolute;
      top: 180px;
      left: 500px;
      font-size: 24px;
    }
    #made-by {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 14px;
      color: grey;
    }
  </style>
</head>
<body>
  <h1>${message}</h1>
  <div id="display-talon"></div>
  <div id="made-by">Lavet af ChatGPT, Youtube, Sigurd og Lucas hjalp meget lidt.</div>
  <button class="button1" onclick="buttonClick(1)">1</button>
  <button class="button2" onclick="buttonClick(2)">2</button>
  <button class="button3" onclick="buttonClick(3)">3</button>
  <button class="button4" onclick="buttonClick(4)">4</button>
  <button class="button5" onclick="buttonClick(5)">5</button>
  <button class="button6" onclick="buttonClick(6)">6</button>
  <button class="button7" onclick="buttonClick(7)">7</button>
  <button class="button8" onclick="buttonClick(8)">8</button>
  <button class="button9" onclick="buttonClick(9)">9</button>
  <button class="button0" onclick="buttonClick(0)">0</button>
  <button class="buttonplus" onclick="buttonClick('+')">+</button>
  <button class="buttonminu" onclick="buttonClick('-')">-</button>
  <button class="buttongang" onclick="buttonClick('*')">*</button>
  <button class="buttondivi" onclick="buttonClick('/')">/</button>
  <button class="buttonclea" onclick="handleClear()">clear</button>
  <button class="buttondele" onclick="handledele()">delete</button>
  <button class="buttonligm" onclick="domath()">=</button>
  <button class="buttonpi" onclick="handlePi()">π</button>  
  <script>
    var tal1 = "";
    var tal2 = "";
    var tal3 = "";
    var change = false;
    var pi = false;

    function handlePi() {
      pi = true;
      buttonClick(Math.PI);
    }

    function buttonClick(value) {
      console.log('Button ' + value + ' clicked');
      if (!isNaN(value)) {
        if (!change) {
          tal1 = tal1 * 10 + parseFloat(value);
          console.log('tal1: ' + tal1);
        } else {
          tal3 = tal3 * 10 + parseFloat(value);
          console.log('tal3: ' + tal3);
        }
        updateDisplay();
      } else {
        change = true;
        tal2 = value;
        console.log('tal2: ' + tal2);
        updateDisplay();
      }
      pi = false;
    }

    function handleClear() {
      tal1 = "";
      tal2 = "";
      tal3 = "";
      change = false;
      updateDisplay();
    }

    function handledele() {
      console.log('deleting');
      if (!change) {
        tal1 = Math.floor(tal1 / 10);
        updateDisplay();
      } else {
        tal3 = Math.floor(tal3 / 10);
        updateDisplay();
      }
    }

    function updateDisplay() {
      document.getElementById('display-talon').innerText = tal1 + " " + tal2 + " " + tal3;
    }

    function domath() {
      var result;
      if (tal2 === '+') {
        result = parseFloat(tal1) + parseFloat(tal3);
      } else if (tal2 === '-') {
        result = parseFloat(tal1) - parseFloat(tal3);
      } else if (tal2 === '*') {
        result = parseFloat(tal1) * parseFloat(tal3);
      } else if (tal2 === '/') {
        result = parseFloat(tal1) / parseFloat(tal3);
      }
      console.log('Result: ' + result);
      handleClear();
      document.getElementById('display-talon').innerText = result;
      tal1 = result;
    }
  </script>
</body>
</html>`);
  res.end();
});

const PORT = 1076;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
