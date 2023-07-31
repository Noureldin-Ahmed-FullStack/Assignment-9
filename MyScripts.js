var SiteName
var SiteUrl
var MyData = [];
var myObj

if (localStorage.getItem('BookMarks') != null) {
    MyData = JSON.parse(localStorage.getItem('BookMarks'))

}

DisplayArr()

function DisplayArr() {
    var cartona = ``
    for (var i = 0; i < MyData.length; i++) {
        cartona += `
    <tr>
        <td>${i + 1}</td>
        <td>${MyData[i].name}</td>
        <td><a class="btn btn-success" href="https://www.${MyData[i].Url}/" target="_blank"><i class="fa-solid fa-eye"></i> Visit</a></td>
        <td><button class="btn btn-danger" onclick="DeletItem(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>
    `
    }
    console.log(cartona)
    document.getElementById('tableContent').innerHTML = (cartona)

}

var SiteValidation = /[a-z 1-9]{3,}(\.com|\.net|\.org|\.eg|\.gov)/

function ReadData() {
    SiteName = document.getElementById("bookmarkName").value
    SiteUrl = document.getElementById("bookmarkURL").value

    if (SiteValidation.test(SiteUrl)) {
        myObj = { name: SiteName, Url: SiteUrl }
        MyData.push(myObj)
        localStorage.setItem('BookMarks', JSON.stringify(MyData))

        if (!(document.getElementById("bookmarkURL").classList.contains("is-invalid") || document.getElementById("bookmarkURL").classList.contains("is-valid"))) {
            document.getElementById("bookmarkURL").classList.add("is-valid")
        }
        else {
            toggleRed()
        }




        DisplayArr()
    }
    else {
        toggleRed()
    }
}


function DeletItem(index) {


    MyData.splice(index, 1)
    localStorage.setItem('BookMarks', JSON.stringify(MyData))

    DisplayArr()
}


function toggleRed() {
    if (document.getElementById("bookmarkURL").classList.contains("is-valid")) {
        document.getElementById("bookmarkURL").classList.replace("is-valid", "is-invalid")
    }
    else if (document.getElementById("bookmarkURL").classList.contains("is-invalid")) {
        document.getElementById("bookmarkURL").classList.replace("is-invalid", "is-valid")
    }
    else {
        document.getElementById("bookmarkURL").classList.add("is-invalid")
    }
}