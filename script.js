let str = "";
const screen = document.querySelector('.display-area');
const buttons = document.querySelectorAll('.button');
const btns = Array.from(buttons);

btns.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        const clickeditem = e.target.textContent;
        if(clickeditem === '='){
            try{
                str = eval(str);
                if(isNaN(str) || !isFinite(str)){
                    str = "";
                    screen.innerHTML = `Error`;
                }
                else{
                    screen.innerHTML = str;
                }
            }
            catch(error){
                console.error("Error:", error.message);
                screen.innerHTML = "Invalid Syntax";
            }
        }
        else if(clickeditem === 'AC'){
            str = '';
            screen.innerHTML = str;
        }
        else if(clickeditem === 'x'){
            str = str + "*";
            screen.innerHTML = str;
        }
        else if(clickeditem === 'backspace'){
            str = str.substring(0, str.length - 1);
            screen.innerHTML = str;
        }
        else{
            str = str + clickeditem;
            screen.innerHTML = str;
        }
    })
})