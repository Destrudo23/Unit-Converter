const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const renderContainer = document.getElementById("render-container");


convertBtn.addEventListener("click", function() {
  let calculationResult = ""
  calculationResult = `
    <div id="render-div">
      <h3>Length (Meter/Feet)</h3><br>
      ${JSON.parse(inputEl.value).toFixed(3)} meters = ${JSON.parse(inputEl.value) * 3.281} feet | ${JSON.parse(inputEl.value)} feet = ${JSON.parse(inputEl.value) / 3.281} meters
    </div>
    <div id="render-div">
      <h3>Volume (Liters/Gallons)</h3><br>
      ${JSON.parse(inputEl.value).toFixed(3)} liters = ${JSON.parse((inputEl.value) * 0.264).toFixed(3)} gallons | ${JSON.parse(inputEl.value).toFixed(3)} gallons = ${JSON.parse((inputEl.value) / 0.264).toFixed(3)} liters
    </div>
    <div id="render-div">
      <h3>Mass (Kilogramms/Pounds)</h3><br>
      ${JSON.parse(inputEl.value).toFixed(3)} kilogramms = ${JSON.parse((inputEl.value) * 2.204).toFixed(3)} pounds | ${JSON.parse(inputEl.value).toFixed(3)} pounds = ${JSON.parse((inputEl.value) / 2.204).toFixed(3)} kilogramms
    </div>
    `
  renderContainer.innerHTML = calculationResult
  }
)
