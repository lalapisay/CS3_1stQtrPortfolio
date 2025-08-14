function checkResult() {
    let maxAge = document.getElementById("maxAge").value;
    let age = document.getElementById("age").value;
    let numPerday = document.getElementById("numPerday").value;

    let totalRequired =  (Number(numPerday) * 365) * (Number(maxAge) - Number(age));

    document.getElementById("res").innerHTML = `<b>you will need ${totalRequired} to last you until the ripe age of ${maxAge} </b>`;
}