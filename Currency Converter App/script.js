const exchangeRates = {
    USD: { EUR: 0.92, GBP: 0.82, INR: 82.4, AUD: 1.5 },
    EUR: { USD: 1.09, GBP: 0.89, INR: 89.7, AUD: 1.63 },
    GBP: { USD: 1.22, EUR: 1.12, INR: 101.5, AUD: 1.83 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0098, AUD: 0.018 },
    AUD: { USD: 0.67, EUR: 0.61, GBP: 0.55, INR: 55.3 }
  };
  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
    AUD: "A$"
  };
  function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    if(!amount || isNaN(amount)){
            alert("Please enter a valid amount");
            return;
    }
    if(from === to){
        document.getElementById("result").innerHTML = `${currencySymbols[from]}${amount.toFixed(2)} ${from} = ${currencySymbols[to]}${amount.toFixed(2)} ${to}`;
        return;
    }
    const rate =exchangeRates[from][to];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById("result").innerText = `${currencySymbols[from]}${amount} ${from} = ${currencySymbols[to]}${convertedAmount} ${to}`;
  }
  function reverse() {
    const fromCurrencySelect = document.getElementById("from");
    const toCurrencySelect = document.getElementById("to");
    
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;

  convertCurrency();
  }