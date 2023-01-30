function save(event) {
    event.preventDefault()
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phoneNo = event.target.phonenumber.value;
    const obj = {
        name,
        email,
        phoneNo
    }
    // localStorage.setItem(obj.email, JSON.stringify(obj))
    axios.post("https://crudcrud.com/api/2ef924f8538544dfb8cc331e5d85e62d/data", obj)
        .then((response) => {

            showUserInScreen(response.data)
        })
        .catch((err) => {
            document.body.innerHTML += "<h3>something went wrong</h3>"
            console.log(err)
        })
}



window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/2ef924f8538544dfb8cc331e5d85e62d/data")
        .then((response) => {
            for (var i = 0; i < response.data.length; i++) {
                showUserInScreen(response.data[i])
            }
        })
        .catch((err) => {
            console.log(err)
        })
})






function showUserInScreen(obj) {
    const parentEle = document.getElementById("listOfItems")
    const childEle = document.createElement("li")
    childEle.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phoneNo;
    parentEle.appendChild(childEle)

    const deleteBtn = document.createElement("input")
    deleteBtn.type = "button"
    deleteBtn.value = "delete"
    childEle.appendChild(deleteBtn)
    deleteBtn.onclick = () => {

        axios.delete(`https://crudcrud.com/api/2ef924f8538544dfb8cc331e5d85e62d/data/${obj._id}`)
            .then((response) => {
                parentEle.removeChild(childEle)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const editBtn = document.createElement("input")
    editBtn.type = "button"
    editBtn.value = "Edit"
    childEle.appendChild(editBtn)
    editBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/2ef924f8538544dfb8cc331e5d85e62d/data/${obj._id}`)
            .then((response) => {
                parentEle.removeChild(childEle)
                document.getElementById('nameInputTag').value = obj.name
                document.getElementById('emailInputTag').value = obj.email
                document.getElementById('phoneNoInputTag').value = obj.phoneNo
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}








