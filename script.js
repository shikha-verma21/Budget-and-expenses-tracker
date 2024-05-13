document.addEventListener("DOMContentLoaded", function () {
  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalExpenses = document.getElementById("total-expenses");
  let total = 0;

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseName.value;
    const amount = parseFloat(expenseAmount.value);

    if (name && !isNaN(amount)) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${name}: $${amount.toFixed(2)}`;
      expenseList.appendChild(listItem);

      total += amount;
      totalExpenses.textContent = total.toFixed(2);

      expenseName.value = "";
      expenseAmount.value = "";
    }
  });
});
