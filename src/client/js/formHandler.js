

function handleSubmit(event) {
    event.preventDefault()
 
const baseURL=`https://api.meaningcloud.com/sentiment-2.1`;
let formText=document.getElementById('name').value;
//let formText="Main dishes were quite good, but desserts were too sweet for";
let language=`EN`;
 
//const newlink='http://localhost:8081/add?ff=2';
const newlink=`http://localhost:8081/add?ff=${formText}`;
Client.checkForName(formText)
console.log("::: Form Submitted :::")

    postData(newlink).then((data)=>{
        console.log(data);
      
    })

    }


    const postData=async (url='')=>{
        const response=await fetch(url,{
            method: 'POST', // The method
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json',
            }
        });
        try{
            const newData=await response.json();
            
            console.log(newData);
            document.getElementById('agreement').innerHTML=`${newData.agreement}`
            document.getElementById('confidence').innerHTML=`${newData.confidence}`
            document.getElementById('irony').innerHTML=`${newData.irony}`
            return newData
        }catch(error){
            console.log("error",error);
        }
        
        }
    

export { handleSubmit }
