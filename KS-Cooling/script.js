document.addEventListener('DOMContentLoaded', function() {
    const hamIcon = document.querySelector('.ham');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.querySelector('.sidebar');

    hamIcon.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'flex';
        } else {
            sidebar.style.display = 'none';
        }
    }
});
function checkFields() {
     var name = document.getElementById("name").value;
     var email = document.getElementById("email").value;
     var phone = document.getElementById("phone").value;
     var problem = document.getElementById("problem").value;
     var submit = document.getElementById("submit");

     if (name !== '' && email !== '' && phone !== '' && problem !== '') {
         submit.disabled = true;
       } else {
         submit.disabled = false;
       }

}  
function clearform(){
    setTimeout(function(){

        document.getElementById("myform").reset();
        document.getElementById("submit").disabled = true;
    }, 3000);
}