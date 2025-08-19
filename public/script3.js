function checkResult() {
    let mp = document.getElementById("mp").value;
    let tip = document.getElementById("tip").value;
    let sc = document.getElementById("sc").value;
    let totalCost = Number(mp) + Number(tip) + (Number(sc) / 100 * Number(mp));
    document.getElementById("res").innerText = totalCost.toFixed(2);
}