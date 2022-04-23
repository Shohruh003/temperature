var elInput = document.querySelector(".input");
var elButton = document.querySelector(".button");
var elOutput = document.querySelector(".output");
var elSelect = document.querySelector(".select");
var elPTselsiy = document.querySelector(".pTselsiy");
var elPKelvin = document.querySelector(".pKelvin");
var elPFarangeyt = document.querySelector(".pFarangeyt");
var elSpanTselsiy = document.querySelector(".tselsiySpan");
var elSpanKelvin = document.querySelector(".kelvinSpan");
var elSpanFarangeyt = document.querySelector(".farangeytSpan");

var tselsiyX = 273.15;

var temperatures = [" ", "Tselsiy (C)", "Kelvin (K)", "Farangeyt (F)"];


for (temperature of temperatures) {
  var newOption = document.createElement("option")
  newOption.textContent = temperature;
  elSelect.appendChild(newOption)
}



elButton.addEventListener("click", function (evt){

  evt.preventDefault();
  
  var amount = elInput.value.trim();
  var convertDirectory = elSelect.value;

  if (amount == "") {
    return
  }

  amount == Number(amount);
  if (isNaN(amount)) {
    return
  }

  elPTselsiy.style.display = "none";
  elPKelvin.style.display = "none";
  elPFarangeyt.style.display = "none";


  switch (convertDirectory) {
    case "Tselsiy (C)":
      var Kelvin = (amount + tselsiyX).toFixed(2);
      var farangeyt = ((amount * 1.8) + 32).toFixed(2);

      elPKelvin.style.display = "block";
      elPFarangeyt.style.display = "block";

      elSpanKelvin.textContent = Kelvin;
      elSpanFarangeyt.textContent = farangeyt;
      break;

      case "Kelvin (K)":
      var tselsiy = (amount - tselsiyX).toFixed(2);
      var farangeyt = ((amount * 1.8) - 459.67).toFixed(2);

      elPTselsiy.style.display = "block";
      elPFarangeyt.style.display = "block";

      elSpanTselsiy.textContent = tselsiy;
      elSpanFarangeyt.textContent = farangeyt;
      break;

      case "Farangeyt (F)":
      var tselsiy = ((amount - 32) / 1.8).toFixed(2);
      var Kelvin = ((amount + 459.67) / 1.8).toFixed(2);

      elPTselsiy.style.display = "block";
      elPKelvin.style.display = "block";

      elSpanTselsiy.textContent = tselsiy;
      elSpanKelvin.textContent = Kelvin;
      break;
  
    default:
      break;
  }
})