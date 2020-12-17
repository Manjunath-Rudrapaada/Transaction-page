document.getElementById("btn").addEventListener("click",()=>{

    var avlbal = document.getElementById("b1").innerHTML
    var depobal = document.getElementById("dp1").innerHTML
    var wdbal = document.getElementById("wp1").innerHTML 
    var drop = document.getElementById("drop").value
    var descr = document.getElementById("desc").value
    var val = document.getElementById("val1").value
    var tab = document.getElementById("tab1")   

    if(drop.toLowerCase()=="deposit") {
        if(Number(val)>0) {
            
            document.getElementById("wp1").innerHTML = "0000.00"
            document.getElementById("dp1").innerHTML = val+".00"
            var upbal = Number(avlbal) + Number(val)
            document.getElementById("b1").innerHTML = upbal+".00"
            
            var newrow = document.createElement("tr")
            tab.appendChild(newrow)

            var year = new Date().getFullYear()
            var month = new Date().getMonth()
            var day = new Date().getDate()
            var date = year+"-"+(month+1)+"-"+day
            var newdata1 = document.createTextNode(date)
            var newcol1 = document.createElement("td")
            newcol1.appendChild(newdata1)
            newrow.appendChild(newcol1)
            
            var newdata2 = document.createTextNode(drop+"/Cr")
            var newcol2 = document.createElement("td")
            newcol2.appendChild(newdata2)
            newrow.appendChild(newcol2)

            var newdata3 = document.createTextNode(val)
            var newcol3 = document.createElement("td")
            newcol3.appendChild(newdata3)
            newrow.appendChild(newcol3)

            var newdata4 = document.createTextNode(descr)
            var newcol4 = document.createElement("td")
            newcol4.appendChild(newdata4)
            newrow.appendChild(newcol4)

            var newdata5 = document.createTextNode(avlbal)
            var newcol5 = document.createElement("td")
            newcol5.appendChild(newdata5)
            newrow.appendChild(newcol5)

            var newdata6 = document.createTextNode(upbal)
            var newcol6 = document.createElement("td")
            newcol6.appendChild(newdata6)
            newrow.appendChild(newcol6)

            document.getElementById("desc").value = ""
            document.getElementById("val1").value = ""
        }
        else {
            alert("Please enter a valid amount!!!")
        }
    }
    else if(drop.toLowerCase()=="withdraw") {
        if(Number(val)>0) {

            if(Number(val)<avlbal && (avlbal-Number(val))>=500) {

            document.getElementById("dp1").innerHTML = "0000.00"    
            document.getElementById("wp1").innerHTML = val+".00"
            var upbal = Number(avlbal) - Number(val)
            document.getElementById("b1").innerHTML = upbal+".00"
            
            var newrow = document.createElement("tr")
            tab.appendChild(newrow)

            var year = new Date().getFullYear()
            var month = new Date().getMonth()
            var day = new Date().getDate()
            var date = year+"-"+(month+1)+"-"+day
            var newcol1 = document.createElement("td")
            var newdata1 = document.createTextNode(date)
            newcol1.appendChild(newdata1)
            newrow.appendChild(newcol1)
            
            var newdata2 = document.createTextNode(drop+"/Dr")
            var newcol2 = document.createElement("td")
            newcol2.appendChild(newdata2)
            newrow.appendChild(newcol2)

            var newdata3 = document.createTextNode(val)
            var newcol3 = document.createElement("td")
            newcol3.appendChild(newdata3)
            newrow.appendChild(newcol3)

            var newdata4 = document.createTextNode(descr)
            var newcol4 = document.createElement("td")
            newcol4.appendChild(newdata4)
            newrow.appendChild(newcol4)

            var newdata5 = document.createTextNode(avlbal)
            var newcol5 = document.createElement("td")
            newcol5.appendChild(newdata5)
            newrow.appendChild(newcol5)

            var newdata6 = document.createTextNode(upbal)
            var newcol6 = document.createElement("td")
            newcol6.appendChild(newdata6)
            newrow.appendChild(newcol6)
 
            document.getElementById("desc").value = ""
            document.getElementById("val1").value = ""
        }
        else {
            alert("You don't have sufficient balance!!!")
            }
        }
        else {
            alert("Please enter a valid amount!!!")
        }
    }
    else  {
        alert("Invalid Choice!!!")
        }
 
})

