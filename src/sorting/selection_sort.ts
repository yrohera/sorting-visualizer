async function selection_sort()
{
    let key:number;
    let count=0;
    let main=document.getElementById("animation-box")!;
    let array:NodeListOf<ChildNode>=main.childNodes!;
    for(let i=0;i<array.length-1;i++)
    {
        key=i;
        array[i].style.backgroundColor="yellow"
        for(let j=i+1;j<array.length;j++)
        {
           let len1=array[key].style.height;
           len1=len1.substring(0, len1.length - 1);
           let len2=array[j].style.height;
           len2=len2.substring(0, len2.length - 1);
           array[j].style.backgroundColor="red";
           await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('');
            },parseInt(document.getElementById("speed")!.value))
        })
           if(parseInt(len1)>parseInt(len2))
           {
               key=j;
           }    
           array[j].style.backgroundColor="rgba(235, 178, 72, 0.424)";
        }
        if(key!==i)
        {
        let temp=array[key].style.height;
        array[key].style.height=array[i].style.height;
        array[i].style.height=temp;
        }
        array[i].style.backgroundColor="rgba(235, 178, 72, 0.424)";
    }
    
}
