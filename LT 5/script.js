document.getElementById("analyzeBtn").addEventListener("click", function() {

    let text = document.getElementById("textInput").value;
    let output = document.getElementById("output");

    let trimmed = text.trim();

    if (trimmed === "") {
        output.innerHTML = "Please enter some text!";
        return;
    }

    // Character count
    let charCount = text.length;

    // Word count (handle multiple spaces)
    let words = trimmed.split(/\s+/);
    let wordCount = words.length;

    // Reverse text
    let reversed = text.split("").reverse().join("");

    output.innerHTML = `
        <p><b>Character Count:</b> ${charCount}</p>
        <p><b>Word Count:</b> ${wordCount}</p>
        <p><b>Reversed Text:</b> ${reversed}</p>
    `;
});