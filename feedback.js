document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    const mailtoLink = `mailto:the.cook.909@gmail.com?subject=Feedback from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AFeedback:%0D%0A${feedback}`;
    
    window.location.href = mailtoLink;
});
