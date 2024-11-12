/* ====================================================== Typing Animation =======================================*/
var typed = new Typed(".typing",{
    strings:["","Web Designer", "Web Developer", "Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

function SendMail() {
    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_clfgnpf", "template_ktq0izt", params).then(function (res){
        alert("Your Message has been sent!");
    })
}
