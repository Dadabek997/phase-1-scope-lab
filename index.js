var customerName = 'bob'

function upperCaseCustomerName(){
    customerName = 'BOB'
    console.log(customerName)
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

console.log('not bob' === undefined)

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Jeff'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'not Jeff'
}