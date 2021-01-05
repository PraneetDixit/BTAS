function validate(e){
    e.preventDefault();
    if(document.getElementById("phone").value.length !== 10){
        alert("Phone number must be 10 characters long");
    }else{
        document.getElementsByTagName("form")[0].submit();
    }
}