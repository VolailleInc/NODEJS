const person ={
    name:'abdul',
    age:25,
    greet:()=>{
        console.log('Hello ' + this.name);
    }
}

const fetchData =callBack=>{
    setTimeout(
        ()=>{
            callBack('Done!')
        }, 2000
    )

}