const amount = document.getElementById("amount")
const term = document.getElementById("term")
const interest = document.getElementById("interest")
const clearAll = document.getElementById("clear")


clearAll.addEventListener('click', ()=>{
    amount.value = ""
    term.value = ""
    interest.value = ""


    return document.getElementById('wrapper').innerHTML = `
    <div class="empty">
    <img src="./assets/images/illustration-empty.svg" alt="">
    <p class="result">Results shown here</p>
    <p class="the">Complete the form and click "calculate repayment"
    to see what your monthly repayment would be.
    </p>
    </div>
    `
})

const calculate=()=>{

    const amount = parseFloat(document.getElementById("amount").value)
    const term = parseFloat(document.getElementById("term").value)
    const interest = parseFloat(document.getElementById("interest").value)

    if (isNaN(amount) || isNaN(interest) || isNaN(term)) {
        return document.getElementById('wrapper').innerHTML = `<h1 style="color: red;">Input must be a number</h1>`
    }

    
        const monthlyRate = interest / 100 / 12
        const numberOfPayment = term * 12
        const factor = Math.pow(1 + monthlyRate, numberOfPayment)
        const monthlyPayment = amount * (monthlyRate * factor) / (factor - 1)
        const total = monthlyPayment * numberOfPayment

        return document.getElementById('wrapper').innerHTML = `
                  <h4>Your results</h4>
                  <p class="text">Your results are shown below based on the information
                  you provided. To adjust the results, edit the form and
                  click "calculate repayments" again.</p>

                  <div class="display">
                     <p>Your monthly repayments</p>
                     <h1>&euro;${monthlyPayment.toFixed(2)}</h1>
                     <hr>
                     <p>Total you'll repay over the term</p>
                     <h3>&euro;${total.toFixed(2)}</h3>
                  </div>
        `
    
}