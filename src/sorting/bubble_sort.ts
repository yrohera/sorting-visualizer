async function Actual_Bubble_Sort()
{
    let main=document.getElementById("animation-box")!;
    let length=main.childNodes.length;
    var speed=document.getElementById("speed")!;
    let array:NodeListOf<ChildNode>=main.childNodes as NodeListOf<HTMLElement>; 
    let count=0,j=0;
    for(let i=0;i<length-1;i++)
    {
        for(let j=0;j<length-1-i;j++)
        {
        array[j].style.backgroundColor="red";
        array[j+1].style.backgroundColor="red";

        await new Promise((resolve,reject) =>   //Promises can support async but not a function.
            setTimeout(() => {
              resolve('');
            }, parseInt(speed.value))
        );
        let lenght1=array[j].style.height;
        let len1=parseInt(lenght1.substring(0,lenght1.length-1));
        let lenght2=array[j+1].style.height;
        let len2=parseInt(lenght2.substring(0,lenght2.length-1));
        array[j].style.backgroundColor="rgba(235, 178, 72, 0.424)";
        array[j+1].style.backgroundColor="rgba(235, 178, 72, 0.424)";
        if(len1>len2)
        {
            array[j].style.height=len2.toString()+"%";
            array[j+1].style.height=len1.toString()+"%";
            count++;
        };
    }
        if(count===0)
        {
            unlock();
            return ;
        }
        count=0;
    }

}