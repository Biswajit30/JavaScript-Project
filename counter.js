let count = 0;
const value = document.getElementById('value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function(btns) {
    btns.addEventListener("click" , function(e) {
      const styles = e.currentTarget.classList;
      console.log(styles);
     if(styles.contains("decrease"))
     {
        count--;
     }
     else if(styles.contains("increase"))
     {
        count++;
     }
     else {
        count =0;
     }
    
     if(count > 0)
     {
        value.style.color = "green";
     }
     else if(count<0)
     {
       value.style.color = "red";
     }
     else {
        value.style.color = "#222";
     } 
     value.textContent = count;

    });
})