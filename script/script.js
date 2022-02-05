$(document).ready(function() {
    
    $('#submit').click(function(e) {
        e.preventDefault();
        $('#form input').removeClass('is-invalid');
        var error = false;

        var email = $('#email').val();
        if (email == '' || email == null) {
            error = true;
            $('#form input').addClass('is-invalid');
        }

        if (error) {
            return
        } else if (!error) {
            var rec = {
                Email: email
            }
            $.ajax({
                type: 'POST',
                url: 'https://www.freecodecamp.com/email-submit',
                data: rec,
                success: console.log('success'),
                dataType: 'json'
            })
        }

    });
});