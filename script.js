
    $(document).ready(function() {
      $('#contactForm').submit(function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Simple form validation
        if (name.trim() === '') {
          alert('Please enter your name.');
          return;
        }
        if (email.trim() === '') {
          alert('Please enter your email.');
          return;
        }
        if (message.trim() === '') {
          alert('Please enter your message.');
          return;
        }

         $('#contactForm')[0].reset();
      });
    });
  