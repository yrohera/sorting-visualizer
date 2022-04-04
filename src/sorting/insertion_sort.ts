async function insertion_sort()
{
    let key:number;
    let count=0;
    let main=document.getElementById("animation-box")!;
    let array:NodeListOf<ChildNode>=main.childNodes!;
    let length=array.length;
    for(let i=1;i<array.length;i++)
    {
       let temp=array[i].style.height
       key=parseInt(temp.substring(0,temp.length-1));
       let key_index=i;
       array[i].style.backgroundColor="yellow";
       for(let j=i-1;j>=0;j--)
       {
           let temp2=array[j].style.height;
           array[j].style.backgroundColor="red";
           
           await new Promise((resolve,reject)=>{
               setTimeout(()=>{
                   resolve('');
               },parseInt(document.getElementById("speed")!.value))
           })

           if(key<parseInt(temp2.substring(0,temp2.length-1)))
           {
               array[j+1].style.height=array[j].style.height;
               key_index=j;
           }
           else
           {
               array[i].style.backgroundColor="rgba(235, 178, 72, 0.424)";
               array[j].style.backgroundColor="rgba(235, 178, 72, 0.424)";
               break;
           }
           array[j].style.backgroundColor="rgba(235, 178, 72, 0.424)";
       } 
       array[i].style.backgroundColor="rgba(235, 178, 72, 0.424)";
       array[key_index].style.height=key.toString()+"%";
       array[key_index].style.backgroundColor="green";
       await new Promise((resolve,reject)=>{
           setTimeout(()=>{
               resolve('')
           },0);
       })
       array[key_index].style.backgroundColor="rgba(235, 178, 72, 0.424)";

    }
}