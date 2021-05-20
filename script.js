const currencyOne = document.querySelector("#currency-one");
const currencyTwo = document.querySelector("#currency-two");
const amountOne = document.querySelector(".amount-one");
const amountTwo = document.querySelector(".amount-two");
const swapBtn = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

const calculate = () => {
  const API = `https://v6.exchangerate-api.com/v6/de293a8d39da755e81dc9ae4/latest/${currencyOne.value}`;

  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwo.value];

      rateInfo.textContent = `1 ${currencyOne.value} = ${rate.toFixed(4)} ${
        currencyTwo.value
      }`;

      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
};

const swap = () => {
  const oldCurrency = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = oldCurrency;
  calculate();
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
swapBtn.addEventListener("click", swap);

calculate();
