// Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to 
// the console after the specified delay time.
function acceptMessageString(){
    console.log('accept message string')
}
acceptMessageString()
let string=[{}]
let message=new Promise((resolve,reject)=>{
    if(string){
        setTimeout(()=>{resolve('message accepted')},7000)
    }
    else{
        setTimeout(()=>{reject('message declined')},7000)
    }
})
async function  acceptmessage(){
    let response=await message
    console.log({response});
}
acceptmessage()


//  You have an array of user IDs and a function getUserData(id)
//  that returns a Promise with user data when given a user ID.
// Write an asynchronous function that fetches and logs the data
// for each user ID one by one, in sequence.
function getuserID(id){
    console.log('user data');
}
getuserID()
let userID=[{}]
let id=new Promise((resolve,reject)=>{
let id=[
    '39963895',
    '20158069',
    '21254116',
    '28798619',
    '37173895'
]
if(userID){
    return resolve(('ID accepted'))
}
else{
    return reject(('ID not accepted'))
}
})
async function acceptID(){
    let response=await id
    console.log({response})
}
acceptID()

// You have an asynchronous function performTask() that
//  returns a Promise. The Promise resolves if the task is successful
// and rejects if there's an error. Write a function that calls
// performTask() and logs a custom success message if the task is successful,
//  and a custom error message if there's an error.
function performTask(task){
    console.log('task is successful');
}
performTask()
let checkSuccessMessage=[{}]
let task=new Promise((resolve,reject)=>{
    if(checkSuccessMessage){
        return resolve(('custom success message'))
    }
    else{
        return reject(('custom error message'))
    }
})
async function customMessage(){
    let message=await task
    console.log({message})
}
customMessage()

