const main=document.querySelector("#main");
function change(box){
    box.style["background-color"]="blue";
}
function func(n){
let bheight=97/n;
let width=800/n;
main.replaceChildren();
for(let i=0;i<n*n;i++){
    let box=document.createElement("div");
    box.style["height"]=`${bheight}vh`;
    box.style["box-sizing"]="border-box";
    box.style["border"]="1px solid black";
    box.style["width"]=`${width}px`;
    box.addEventListener("mouseover",()=>change(box));
    main.appendChild(box);
}
}
function grid(){
    let n=parseInt(prompt("Enter value of n for n*n grid"));
    if(n<=100) func(n);
    else if(n>100) alert("Max allowed value 100");
}
func(16);
reset.addEventListener("click",()=>grid());
