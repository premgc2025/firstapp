
function CallBack(){

    // function doSomething(resolved){
    //     console.log("I am callback function")
    //     let name = ["Prem","Bidhan"]
    //     resolved(name)

    // }


    // function addSomething(c){
    //     console.log("I am addSomething Function")

    //     let city = ["Kathmandu","Bhaktapur"]
    //     c(city)
    // }
    
   

    // setTimeout(function(){
    //     doSomething(function(name){
    //         console.log(name)
    //         setTimeout(function(){
    //             addSomething(function(city){
    //                 console.log(city)
    //             })


    //         },1000)
    //     })

    // },5000)

    //  async function handleAPI(){

    // let response=  await fetch("https://fakestoreapi.com/products")
    //    let data = await response.json()
    //    console.log(data)
    //    console.log("This is await log")


    // }
    // console.log("this is tests")

    // handleAPI()
    
   
    return(
        <div className="callback-header">
            <div className="callback-section">
                <div className="callback-main">
                    <h1>This is Callback Page</h1>

                </div>
            </div>
        </div>
    )
}
export default CallBack;