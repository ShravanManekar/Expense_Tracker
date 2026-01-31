document.addEventListener('DOMContentLoaded',()=>{
   const expenseName=document.getElementById('expense-name');
   const expensePrice=document.getElementById('expense-price');
   const expenseList=document.getElementById('expense-list');
   const totalAmount=document.getElementById('total-amount');
   const expenseForm=document.getElementById('expense-form');
   

   let expenses=JSON.parse(localStorage.getItem('expenses'))||[];

   expenseForm.addEventListener('submit',()=>{
    const name=expenseName.value.trim();
    const  amount= parseFloat(expensePrice.value.trim());
    if(name!='' && !isNaN(amount)&& amount>0){
        let newExpenses={
            id:Date.now(),
            name,
            amount
            
        }
        expenses.push(newExpenses);


    }
    expenseList.addEventListener('click',()=>{
        cre

    })



   })













   function saveTask(){
    localStorage.setItem('expense',JSON.stringify(expenses))
   }


})