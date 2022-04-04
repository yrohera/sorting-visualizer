
function unlock()
{
    let btn=document.querySelectorAll("select")!;
    for(var i=0;i<btn.length;i++)
    {
        btn[i].disabled=false;
    }
    document.getElementById("create")!.disabled=false;
    document.getElementById("sort")!.disabled=false;
}

function CreateGraph():void
{
    let array:number[]=[];
    let main:any[]=[];
    let k=0,i=0;
    let length=document.getElementById("length")! as HTMLInputElement;
    while(i<parseInt(length.value))
    {
        let temp=Math.floor(Math.random()*100)+1;
        if(array.indexOf(temp)===-1)
        {
            array[i]=temp;
            i++;
        }    
    }

    let cont=document.getElementById("animation-box")!
    cont.innerHTML=""
    for(let i=0;i<parseInt(length.value);i++)
    {
        main[i]=document.createElement("div");
        cont.appendChild(main[i]);
        main[i].style="position:absolute;transition:0.5s;bottom:0px;border:0.5px solid black;height:"+array[i].toString()+"%;width:"+Math.floor(100/parseInt(length.value))+"%;background-color:rgba(235, 178, 72, 0.424);left:"+(i*Math.floor(100/parseInt(length.value))).toString()+"%";
    }   
    
    var btn=document.getElementById("sort")! as HTMLButtonElement;
    btn.disabled=false;
    
}

async function Sort()
{
    let btn=document.querySelectorAll("select")!;
    for(var i=0;i<btn.length-1;i++)
    {
        btn[i].disabled=true;
    }
    let btn_1=document.getElementById("create")! as HTMLButtonElement;
    let btn_2=document.getElementById("sort")!;
    btn_1.disabled=true;
    btn_2.disabled=true;
    let option=document.getElementById("sortOption")! as HTMLInputElement;
    switch(option.value)
    {
        case "1":
            await Actual_Bubble_Sort();
            unlock();
            break;
        case "2":
            await Merge();
            unlock();
            break;
        case "3":
            await insertion_sort();
            unlock();
            break;
        case "4":
            await selection_sort();
            unlock();
            break;
        case "5":
             await quick_sort();
             unlock();
             break;
        case "6":
            await heap_Sort();
            unlock();
            break;
        default:
            alert("This is not the option");
            break;
    }
}