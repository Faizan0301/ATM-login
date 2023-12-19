let user = 'Faizan'
let pass = 12345
let balance =20000
function Enter() {
    let userIn = document.getElementById('user').value
    let passIn = document.getElementById('pass').value
    if (userIn == user && passIn == pass) {
        document.getElementById('login').style.display = 'none'
        document.getElementById('inear').style.display = 'block'
        document.getElementById('close').style.display = 'block'
    } else {
        alert('Please enter right username and password')
        
    }
    
}
function Close() {
    if (document.getElementById('inear').style.display == 'block') {
        document.getElementById('inear').style.display = 'none'
        document.getElementById('login').style.display = 'block'
        document.getElementById('close').style.display = 'none'
    }
    else if (document.getElementById('bal').style.display == 'block') {
        document.getElementById('bal').style.display = 'none'
        document.getElementById('inear').style.display = 'block'

    }
    else if (document.getElementById('dep').style.display == 'block') {
        document.getElementById('dep').style.display = 'none'
        document.getElementById('inear').style.display = 'block'

    }
    else if (document.getElementById('wit').style.display == 'block') {
        document.getElementById('wit').style.display = 'none'
        document.getElementById('inear').style.display = 'block'

    }
}
function bal() {
    document.getElementById('bal').style.display = 'block'
    document.getElementById('inear').style.display = 'none'
    document.getElementById('balance').value = balance
    return balance;
}
function Dep() {
    document.getElementById('dep').style.display = 'block'
    document.getElementById('inear').style.display = 'none'
    document.getElementById('dep-bal').value = balance
}
function deposite() {
    var depAmount = document.getElementById('dep-amount').value
    if (depAmount > 1 && depAmount < 10001) {
        balance+= parseInt(depAmount)
        document.getElementById('dep-bal').value = balance
        return
    } else {
        alert('please enter the valide amount')
    }
}
function withdrawal() {
    var witAmount = document.getElementById('wit-amount').value
    if (witAmount < balance &&witAmount>0) {
        balance-= parseInt(witAmount)
        document.getElementById('wit-bal').value = balance
    } else {
        alert('please enter the valide amount')
    }
}
function Wit() {
    document.getElementById('wit').style.display = 'block'
    document.getElementById('inear').style.display = 'none'
    document.getElementById('wit-bal').value = balance
}


