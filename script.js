document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("paragraph");
    const text = "let collaborabe with us and then experiance the unique horizon of Technology developments.we are technical exparts and care your time and finance.lets share a one sky for common goals .";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            paragraph.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Adjust the speed by changing the timeout value
        }
    }

    typeWriter();
});
