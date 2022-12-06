document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //Grab the form
  const form = document.getElementById ("create-task-form")
  //console.log (form)
  //event type + prevent default
  form.addEventListener("submit",(e)=>{
    e.preventDefault()
   
    //input value
   const formValueTaskList= e.target["new-task-description"].value
   newList(formValueTaskList)
   form.reset() // reset input for new
   
  })
  //create a list + delete button next to each item in the list
  function newList(formValueTaskList){
    const li = document.createElement("li")
    const deleteButton = document.createElement("button")
    deleteButton.textContent= "remove"
    deleteButton.addEventListener("click",(e)=>{
     e.target.parentNode.remove() // how to clear from the parentNode (li) after remove button
     

    })
       li.textContent=formValueTaskList
      listing.appendChild(li)
      li.appendChild(deleteButton)// append child to li
  }
  const listing = document.getElementById("tasks")
   //console.log (listing)
        
});


 
