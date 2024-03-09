let disp='';
let ans=0;

function calc(){
    try{
        return eval(disp);
    }
    catch(error){
        return 'error';
    }
}

const var1= document.getElementById('box');

var1.textContent=disp;

document.getElementById('.').addEventListener('click',()=>{
    disp+='.';
    var1.textContent=disp;});

    document.getElementById('(').addEventListener('click',()=>{
        disp+='(';
        var1.textContent=disp;});

        document.getElementById(')').addEventListener('click',()=>{
            disp+=')';
            var1.textContent=disp;});

            document.getElementById('del').addEventListener('click',()=>{
                disp=disp.slice(0,-1);
                var1.textContent=disp;});

document.getElementById('1').addEventListener('click',()=>{
    disp+='1';
    var1.textContent=disp;});

document.getElementById('2').addEventListener('click',()=>{
        disp+='2';
        var1.textContent=disp;});

document.getElementById('3').addEventListener('click',()=>{
            disp+='3';
            var1.textContent=disp;});        

document.getElementById('+').
addEventListener('click',()=>{
    disp+='+';
    var1.textContent=disp;
});

document.getElementById('4').addEventListener('click',()=>{
    disp+='4';
    var1.textContent=disp;});

    document.getElementById('5').addEventListener('click',()=>{
        disp+='5';
        var1.textContent=disp;});

        document.getElementById('6').addEventListener('click',()=>{
            disp+='6';
            var1.textContent=disp;});

            document.getElementById('-').addEventListener('click',()=>{
                disp+='-';
                var1.textContent=disp;});

                document.getElementById('7').addEventListener('click',()=>{
                    disp+='7';
                    var1.textContent=disp;});

                    document.getElementById('8').addEventListener('click',()=>{
                        disp+='8';
                        var1.textContent=disp;});

                        document.getElementById('9').addEventListener('click',()=>{
                            disp+='9';
                            var1.textContent=disp;});
            
                    document.getElementById('*').addEventListener('click',()=>{
                                disp+='*';
                                var1.textContent=disp;});
            
                                document.getElementById('0').addEventListener('click',()=>{
                                    disp+='0';
                                    var1.textContent=disp;});

document.getElementById('=').
addEventListener('click',()=>{
    let ans=calc();
    console.log(ans);
    var1.textContent=ans;
    ans=0;
    disp='';
});

document.getElementById('ac').
addEventListener('click',()=>{
    disp='';
    var1.textContent=disp;
    ans=0;
});

document.getElementById('/').
addEventListener('click',()=>{
    disp+='/';
    var1.textContent=disp;
});
