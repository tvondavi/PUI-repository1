var x = document.getElementsByClassName("glaze");


$(document).ready(function(){
    $('.glaze').change(function(){
         localStorage.setItem('selectedBuns', $(this).val());
         $('.glaze').value(localStorage.getItem('selectedBuns'));
    });
});

if (localStorage.getItem('selectedBuns') === null) { 
                localStorage.setItem('selectedBuns', "0");
                console.log("0 Buns"); 
            }
            else {
                if (localStorage.getItem('selectedBuns') === "0") { 
                    console.log("0 Buns"); 
                } else if (localStorage.getItem('selectedBuns') === "1") { 
                    console.log("1 Bun"); 
                } else if (localStorage.getItem('selectedBuns') === "3") { 
                    console.log("3 Buns"); 
                } else if (localStorage.getItem('selectedBuns') === "6") { 
                    console.log("6 Buns"); 
                } else if (localStorage.getItem('selectedBuns') === "12") { 
                    console.log("12 Buns"); 
                }
            }