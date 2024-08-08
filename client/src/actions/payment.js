export async function getPayment () {
    try{
        const res = await fetch("http://localhost:5000/");
        if(!res){
            throw new Error("Couldn't get details!")
        }

        const data = await res.json();
        return data;
    }
    catch(err){
       console.log("ERROR",err);
       throw new Error("Couldn't get details");
    }
}