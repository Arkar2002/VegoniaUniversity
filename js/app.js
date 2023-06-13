// jQuery Area
$(document).ready(function(){
    // Start navbar togger button crossx
    $(".navbar-toggler").click(function(){

        if($(this).hasClass("collapsed")){
            $(this).removeClass("crossx");
        }else{
            $(this).addClass("crossx");
        }

    })
    // End navbar togger button crossx
})

// Javascript Area

// Start Login Modal

document.addEventListener("click", e => {
    const isDropdownbutton = e.target.matches("[data-dropdown-button]");
    if (e.target === document.getElementById("btn-close")) {
        e.target.closest("[data-dropdown]").classList.remove("active");
    }
    if (!isDropdownbutton && e.target.closest("[data-dropdown]")) return;
    let currentDropdown;
    if (isDropdownbutton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    })
})

// const getbtnopen = document.getElementById("btn-open"),
//         getbtnclose = document.getElementById("btn-close"),
//         getloginmodal = document.getElementById("login_modal");

// getbtnopen.addEventListener("click",function(){
//     // Method 1 Using classname which is so long
//     // if(this.parentElement.classList.contains("open_modal")){
//     //     this.parentElement.classList.remove("open_modal");
//     //     closemodal();
//     // }else{
//     //     this.parentElement.classList.add("open_modal");
//     //     openmodal();
//     // }
//     openmodal();
// })

// function openmodal(){
//     getloginmodal.style.display = "block";
//     document.getElementsByTagName("body")[0].style.overflow = "hidden";
// }

// function closemodal(){
//     getloginmodal.style.display = "none";
//     document.getElementsByTagName("body")[0].style.overflow = "auto";
// }

// getbtnclose.addEventListener("click",function(){
//     // getloginmodal.parentElement.classList.remove("open_modal");
//     closemodal();
// });

// window.onclick = (e) => {
//     if(e.target === getloginmodal){
//         // getloginmodal.parentElement.classList.remove("open_modal");
//         closemodal();
//     }
// }

// End Login Modal

const getcountervalues = document.querySelectorAll(".countervalues");

getcountervalues.forEach(getcountervalue => {
    getcountervalue.textContent = 0;

    const updatecounter = () => {
        const getcounterdata = +getcountervalue.getAttribute("data-target");
        const getcountertext = +getcountervalue.innerText;
        const incnumber = getcounterdata / 40;
        if(getcounterdata > getcountertext){
            getcountervalue.innerHTML = getcountertext + incnumber;
            setTimeout(updatecounter,50);
        }
    }

    updatecounter();
})

// Start Rating Section 

// start google code for chart 
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Myanmar', 8],
        ['Thailand', 2],
        ['Singapore', 4],
        ['Indonesia', 2],
        ['SiriLanka', 8]
    ]);

    var options = {
        title: 'International Students',
        // is3D: true
        // pieHole: true
        width: 480,
        height: 305
    };

    var chart = new google.visualization.PieChart(document.getElementById('piecharts'));

    chart.draw(data, options);
}

// end google code for chart

// End Rating Section

// Autoyear

const getautoyear = document.getElementById("autoyear");

getautoyear.innerHTML = new Date().getFullYear();