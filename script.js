const calculate = (percentage) => {
  const bill = parseFloat(document.querySelector('#bill').value);
  const people = parseInt(document.querySelector('#noOfP').value);
  if (bill && people && percentage > 0) {
    document.querySelector('.resetBtn').classList.remove('inactive');
    document
      .querySelector('.numberOfPeopleInput input')
      .classList.remove('error');
    const tip = ((percentage / 100) * bill) / people;
    const billPerson = bill / people;
    const total = billPerson + tip;
    document.querySelector('.amountValue').innerText = `$${tip.toFixed(2)}`;
    document.querySelector('.totalValue').innerText = `$${total.toFixed(2)}`;
  } else if (!people || people < 0) {
    document.querySelector('.numberOfPeopleInput input').classList.add('error');
  } else {
    if (!document.querySelector('.resetBtn').classList.contains('inactive')) {
      document.querySelector('.resetBtn').classList.add('inactive');
    }
  }
};

document.querySelector('.customPercentage').oninput = e =>{
    const tip = parseFloat(e.target.value);
    calculate(tip);
    if(!e.target.value){
        document.querySelector('.resetBtn').classList.remove('inactive');
    }
}

document.querySelectorAll('.btn').forEach((btn) => {
  btn.onclick = (e) => {
    const tip = parseFloat(e.target.dataset.value);
    calculate(tip);
  };
});

document.querySelector('.resetBtn').onclick = (e) => {
  if (!e.target.classList.contains('inactive')) {
    document.querySelector('#bill').value = undefined;
    document.querySelector('#noOfP').value = undefined;
    document.querySelector('.customPercentage').value = undefined;
    document.querySelector('.amountValue').innerText = `$0.00`;
    document.querySelector('.totalValue').innerText = `$0.00`;
    document.querySelector('.resetBtn').classList.add('inactive');
  }
};
