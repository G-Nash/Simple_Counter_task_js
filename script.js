x=0
console.log(x)


function decr() {
    x-=1
    console.log(x)
    document.getElementById("count").innerText=x
}

function incr() {
    x+=1
    console.log(x)
    document.getElementById("count").innerText=x
}

function rst() {
    x=0
    console.log(x)
    document.getElementById("count").innerText=x
}