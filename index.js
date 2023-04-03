const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const taxeschooseOne = document.querySelector("#addTaxesOne");
button.addEventListener("click", calculateAmount);

const taxeschooseTwo = document.querySelector("#addTaxesTwo");
button.addEventListener("click", calculateAmount);

const taxeschooseThree = document.querySelector("#addTaxesThree");
button.addEventListener("click", calculateAmount);

const taxeschooseFour = document.querySelector("#addTaxesFour");
button.addEventListener("click", calculateAmount);


function calculateAmount(e) {
    e.preventDefault();
    const rent = document.querySelector("#rent").value;
    const electricity = document.querySelector("#electricity").value;
    const internet = document.querySelector("#internet").value;
    const food = document.querySelector("#food").value;
    const taxesOne = document.querySelector("#taxesOne").value;
    const taxesTwo = document.querySelector("#taxesTwo").value;
    const taxesThree = document.querySelector("#taxesThree").value;
    const taxesFour = document.querySelector("#taxesFour").value;
 
    const roommate = document.querySelector("#roommate").value;
    


    if( roommate ===" " || roommate < 1 ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter a number of roommates!',
            
          })
    }
 


  


    let amount = Number(rent) + Number(electricity) + Number(internet) + Number(food) ;
    let amountPerPerson = amount / roommate;
    let rentTaxes = Number(rent) * Number(taxesOne);
   
    let electricityTaxes = Number(electricity) * taxesTwo;
  

    let internetTaxes = Number(internet) * taxesThree;
    let foodTaxes = Number(food) * taxesFour;
    let totalTaxesAmount = Number(rentTaxes) + Number(electricityTaxes) + Number(internetTaxes) + Number(foodTaxes);
    let amountTaxesPerPerson = totalTaxesAmount / roommate;

    let totalAmount = amountPerPerson +  amountTaxesPerPerson;

   
    

   

    amountPerPerson =  amountPerPerson.toFixed(2);
    amountTaxesPerPerson =  amountTaxesPerPerson.toFixed(2);
    totalAmount = totalAmount.toFixed(2);
    

document.querySelector("#dividedBill").textContent = amountPerPerson; 
document.querySelector("#dividedTip").textContent = amountTaxesPerPerson; 
document.querySelector("#billAndTip").textContent = totalAmount; 

  
} 