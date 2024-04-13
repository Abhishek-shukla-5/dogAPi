let button = document.querySelector("button");
// let para = document.querySelector("p");
// let url ="https://catfact.ninja/fact";

// button.addEventListener("click",async ()=>{
//     console.log("button was clicked");
//     let fact = await grtFact();
//     console.log(fact);
//     para.innerText=fact;
    
// })

// async function grtFact(){
//    try{
//     let res = await axios.get(url);
//    return res.data.fact;
//    }
//    catch(error){
//     console.log("error --",error);
//    }
// }
let url = "https://dog.ceo/api/breeds/image/random";

button.addEventListener("click",async ()=> {
    console.log("button is clicked");
    let imgg =document.getElementById("imgp");
    let photo = await getPhoto();
    imgg.src=photo;
})

async function getPhoto()
{
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(error){
        console.log("error -- ",error)
    }
}