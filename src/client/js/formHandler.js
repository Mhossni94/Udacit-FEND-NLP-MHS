function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    let data = {text:formText};
    console.log("::: Form Submitted :::")
    fetch(`http://localhost:3030/test`,{
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
        })
    .then(res => res.json())
    .then(function(res) {
        
        document.getElementById('results').innerHTML = res.result
    })
}

    export { handleSubmit }
