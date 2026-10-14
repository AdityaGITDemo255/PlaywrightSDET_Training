

 export let toolName='Playwright';
//console.log(toolName);



 export function getData(name)
{
    console.log("Hello "+name);
    
}

export default function test1()
{
    console.log("This is test() function....");
    
}

function display()
{
    console.log("This is display.....");
    
}


//SyntaxError: Duplicate export of 'default'
// export default function test2()
// {
//     console.log("This is test2() function....");
    
// }

//call
//getData("Rahul");

 export class StudentData
{
    sid;
    sname;
    subject;

    constructor(sid,sname,subject)
    {
        this.sid=sid;
        this.sname=sname;
        this.subject=subject

    }

    getInfo()
    {
        console.log("Student id is: "+this.sid+"\nStudent name is: "+this.sname+"\nStudent subject is: "+this.subject);
        
    }

}

//object
// const s1=new StudentData(1,"Seema","Testing");
// s1.getInfo();

//way2
//export {toolName,StudentData,getData}