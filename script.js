const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const renderContainer = document.getElementById("render-container");


convertBtn.addEventListener("click", function() {
  let calculationResult = ""
  calculationResult = `
    <div id="render-div">
      <h6>Length (Meter/Feet)</h6><br>
      ${JSON.parse(inputEl.value)} meters = ${JSON.parse((inputEl.value) * 3.281).toFixed(3)} feet | ${JSON.parse(inputEl.value)} feet = ${JSON.parse((inputEl.value) / 3.281).toFixed(3)} meters
    </div>
    <div id="render-div">
      <h6>Volume (Liters/Gallons)</h6><br>
      ${JSON.parse(inputEl.value)} liters = ${JSON.parse((inputEl.value) * 0.264).toFixed(3)} gallons | ${JSON.parse(inputEl.value)} gallons = ${JSON.parse((inputEl.value) / 0.264).toFixed(3)} liters
    </div>
    <div id="render-div">
      <h6>Mass (Kilogramms/Pounds)</h6><br>
      ${JSON.parse(inputEl.value)} kilogramms = ${JSON.parse((inputEl.value) * 2.204).toFixed(3)} pounds | ${JSON.parse(inputEl.value)} pounds = ${JSON.parse((inputEl.value) / 2.204).toFixed(3)} kilogramms
    </div>
    `
  renderContainer.innerHTML = calculationResult
  }
)
