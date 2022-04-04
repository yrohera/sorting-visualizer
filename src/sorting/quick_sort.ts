async function partition(array:NodeListOf<ChildNode>,low:number,high:number):Promise<number>
{
   let key:number=high;
   let i=low,j=low-1;
   while(i<high)
   {
        array[key].style.backgroundColor="red";
        array[i].style.backgroundColor="yellow";
        let len1=array[key].style.height;
        len1=len1.substring(0,len1.length-1);
        let len2=array[i].style.height;
        len2=len2.substring(0,len2.length-1);
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('');
            },parseInt(document.getElementById("speed")!.value))
        });
        if(parseInt(len1)>parseInt(len2))
        {
            j++;
            let temp=array[i].style.height;
            array[i].style.height=array[j].style.height;
            array[j].style.height=temp;
        }
        array[i].style.backgroundColor="rgba(235, 178, 72, 0.424)";
        i++;
   }  
   let temp=array[key].style.height;
   array[key].style.height=array[j+1].style.height;
   array[j+1].style.height=temp;
   array[key].style.backgroundColor="rgba(235, 178, 72, 0.424)";
   return j+1;
}




async function quick_sort(low?:number,high?:number)
{
    let main=document.getElementById("animation-box")!;
    let array1:NodeListOf<ChildNode>=main.childNodes!;
    if(low===undefined && high===undefined)
    {
        low=0;
        high=array1.length-1;
    }
    if(low!<high!)
    {
        let key=await partition(array1,low!,high!);
        await quick_sort(low,key-1);
        await quick_sort(key+1,high);
    }
}




