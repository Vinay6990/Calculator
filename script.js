let input = document.querySelector(".input");
let buttons = document.querySelectorAll('button');
let disable = document.querySelectorAll('.button4');

let string = "";
disable.forEach(button => {
    button.disabled = true;
});

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click" , (e) => {
        
        if(e.target.innerHTML == '='){
            string= eval(string);
            input.value=string;
        }
        else if (e.target.innerHTML== 'Del'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value=string;
        } else{
            string = string + e.target.innerHTML;
            input.value = string;
            disable.forEach(button => {
            button.disabled = false;
        });
           
        }
    });
});


// let input = document.querySelector(".input");
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener("click", (e) => {
//         if (e.target.innerHTML === '=') {
//             try {
//                 string = eval(string);
//                 input.value = string;
//             } catch (error) {
//                 input.value = "Error";
//                 string = "";
//             }
//         } else if (e.target.innerHTML === 'AC') {
//             string = "";
//             input.value = string;
//         } else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     });
// });