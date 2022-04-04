async function mergeSort(array:NodeListOf<ChildNode>,left:number,mid:number,right:number)
{
    let n1=mid-left+1;
    let n2=right-mid;
    let L:number[]=[];
    let R:number[]=[];
    array[left].style.backgroundColor="red";
    array[right].style.backgroundColor="red";
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("");
        },parseInt(document.getElementById("speed")!.value));
    });
    for(let i=0;i<n1;i++)
    {
       let temp=array[left+i].style.height;
       temp=temp.substring(0,temp.length-1)
       L[i]=parseInt(temp);
    }
    for(let i=0;i<n2;i++)
    {
       let temp=array[mid+i+1].style.height;
       temp=temp.substring(0,temp.length-1)
       R[i]=parseInt(temp); 
    }
    
    let i=0,j=0,k=left;

    while(i<n1 && j<n2)
    {
        if(L[i]<=R[j])
        {
            array[k].style.height=L[i].toString()+"%";
            i++;
        }
        else
        {
            array[k].style.height=R[j].toString()+"%";
            j++;
        }
        k++;
    }

    while(i<n1)
    {
        array[k].style.height=L[i].toString()+"%";
        k++;
        i++;
    }

    while(j<n2)
    {
        array[k].style.height=R[j].toString()+"%";
        k++;
        j++;
    }
    array[left].style.backgroundColor="rgba(235, 178, 72, 0.424)";
    array[right].style.backgroundColor="rgba(235, 178, 72, 0.424)";
    
}

async function Merge(left?:number,right?:number)
{
    let main=document.getElementById("animation-box")!;
    let arr:NodeListOf<ChildNode>=main.childNodes!;
    if(left===undefined && right===undefined)
    {
        left=0;
        right=arr.length-1;
    }
    if(left!<right!)
    {
        let mid=left!+Math.floor((right!-left!)/2);

    await Merge(left,mid);   //->Till l<r....
    await Merge(mid+1,right);
    await mergeSort(arr,left!,mid,right!);
    }
}
