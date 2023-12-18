let user = 'Faizan'
let pass = 12345
let balance = 21897.40
function Enter() {
    let userIn = document.getElementById('user').value
    let passIn = document.getElementById('pass').value
    if (userIn == user && passIn == pass) {
        document.getElementById('login').style.display = 'none'
        document.getElementById('inear').style.display = 'block'
    } else {
        alert('Please enter right username and password')

    }

}
function bal() {
    document.getElementById('bal').style.display = 'block'
    document.getElementById('inear').style.display = 'none'
    document.getElementById('balance').innerHTML = balance
    return balance;
}
function Dep() {
    document.getElementById('dep').style.display = 'block'
    document.getElementById('inear').style.display = 'none'
}
function deposite(){
    var depAmount = document.getElementById('dep-amount').value
    if (depAmount > 1 && depAmount < 10001) {
        alert('Your amount cridet successfully')
    }else{
        alert('please enter the valide amount')
    }
    balance+=depAmount
}
function withdrawal(){
    var witAmount = document.getElementById('wit-amount').value
    if (witAmount<balance) {
        alert('Your amount debit successfully')
    }else{
        alert('please enter the valide amount')
    }
}
function Wit() {
    document.getElementById('wit').style.display = 'block'
    document.getElementById('inear').style.display = 'none'
}


