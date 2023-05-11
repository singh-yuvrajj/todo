const headings=document.querySelectorAll(".heading");
console.log(headings[0].localName);
let i=0;
function timer(head,color,text,time){
    return new Promise((resolve,reject)=>{
        if(head.localName =="h1"){
            setTimeout(()=>{
            head.textContent=text;
            head.style.color=color;
            resolve();
        },time);
    }
        else{
            reject();
        }
})
}

timer(headings[i++],"red","one",1000)
.then(()=>timer(headings[i++],"blue","two",1000))
.then(()=>timer(headings[i++],"green","three",2000))
.then(()=>timer(headings[i++],"violet","four",3000))
.then(()=>timer(headings[i++],"cyan","five",4000))
.then(()=>timer(headings[i++],"Yellow","six",5000))
.catch(()=>alert('Erro: can\'t Find the element'))




    


