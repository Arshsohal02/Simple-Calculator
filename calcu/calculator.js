function Sel(vat){
    document.getElementById("displaybar").value+=vat
}
function Solve(){
     let scrn = document.getElementById("displaybar").value
     let ans = eval(scrn)
     document.getElementById("displaybar").value = ans
 }
 function clr(){
     document.getElementById("displaybar").value = ""
 }
