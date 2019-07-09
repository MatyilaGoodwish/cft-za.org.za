
function Memberships () 
{
    this.enrollment = function enrollment (data) {

    };
    this.submit = function submit (form)
    {
        console.log(document.querySelector("form"));
        console.log(document.querySelector("form").idnumbers.value);
    };
}

var Registration = new Memberships();

Registration.submit();
