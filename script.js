document.addEventListener("DOMContentLoaded",()=>{
   const expenseForm=  document.getElementById("expense-form")
     const expenseName= document.getElementById("expense-name")
     const expenseAmount=   document.getElementById("expense-amount")
        const expenseList=  document.getElementById("expense-list")
         const totalAmount=   document.getElementById("total-amount")

         let expenses= JSON.parse(localStorage.getItem('expenses')) ||  [];
         let total= calculateTotal();
         renderExpenses();
         updateTotal();

         expenseForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const name =expenseName.value.trim();
            const amount=parseFloat(expenseAmount.value.trim());

            if(name!=="" && !isNaN(amount) && amount>0){

                const newExpenses={
                    id:Date.now(),
                    name,
                    amount
                };
                expenses.push(newExpenses);
                saveExpensesTolocal();
                updateTotal();
                renderExpenses();
                

                //clear input 
                expenseName.value='';
                expenseAmount.value='';
            }

         }); 
         function renderExpenses(){
            expenseList.innerHTML="";
            expenses.forEach((expense ) =>{
                const li=document.createElement('li');
                li.innerHTML=`
                ${expense.name} -Rs.${expense.amount}
                <button data-id="${expense.id}">Delete</button>
                `;
                expenseList.appendChild(li);
            }  )

         }



         function calculateTotal(){
            return expenses.reduce((sum,expense) => sum + expense.amount,0)

         } 

         function saveExpensesTolocal(){
            localStorage.setItem('expenses',JSON.stringify(expenses));
         }

         function updateTotal(){
            total=calculateTotal();
            totalAmount.textContent=total.toFixed(2);
         }

         expenseList.addEventListener('click',(e)=>{
            if(e.target.tagName=='BUTTON'){
               const expenseID= parseInt(e.target.getAttribute('data-id')  );
               expenses=expenses.filter(expense=>expense.id!== expenseID);
               saveExpensesTolocal();
               renderExpenses();
               updateTotal();

            }
         });

});