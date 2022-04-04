function swap(array:NodeListOf<ChildNode>,i:number,j:number)
{
    let temp=array[i].style.height;
    array[i].style.height=array[j].style.height;
    array[j].style.height=temp;
}

function convert_2_number(strings:string):number
{
    return parseInt(strings.substring(0,strings.length-1));
}

async function heapify(array:NodeListOf<ChildNode>,length:number,i:number)
{
    let largest=i;
    let l=2*i+1;
    let r=2*i+2;
    let left:number,right:number;
    array[i].style.backgroundColor="yellow";
    let main=convert_2_number(array[largest].style.height);
    if(l<length)
    {
        array[l].style.backgroundColor="red";
    }
    if(r<length)
    {
        array[r].style.backgroundColor="red";
    }
    if(l<length)
    {
        left=convert_2_number(array[l].style.height);
        if(left>main)
        {
            largest=l;
            main=left;
        }
    }
    if(r<length)
    {
        right=convert_2_number(array[r].style.height);
        if(right>main)
        {
            largest=r;
        }
    }
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("");
        },parseInt(document.getElementById("speed")!.value))
    })
    if (largest!==i)
    {
        swap(array,largest,i);       
        if(l<length)
        {
            array[l].style.backgroundColor="rgba(235, 178, 72, 0.424)";
        }
        if(r<length)
        {
            array[r].style.backgroundColor="rgba(235, 178, 72, 0.424)";
        }
        array[i].style.backgroundColor="rgba(235, 178, 72, 0.424)";
        await heapify(array,length,largest);   
    }
    else
    {
        if(l<length)
        {
            array[l].style.backgroundColor="rgba(235, 178, 72, 0.424)";
        }
        if(r<length)
        {
            array[r].style.backgroundColor="rgba(235, 178, 72, 0.424)";
        }
        array[i].style.backgroundColor="rgba(235, 178, 72, 0.424)";
    }
}

async function heap_Sort()
{
    let main=document.getElementById("animation-box")!;
    let array=main.childNodes;
    let length=array.length;

    for(let i=Math.floor(length/2);i>=0;i--)
    {
       await heapify(array,length,i);
    }

    for(let i=length-1;i>0;i--)
    {
        swap(array,0,i);
        await heapify(array,i,0);
    }
}