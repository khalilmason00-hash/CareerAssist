function analyzeJob() {

    const resume = document.getElementById("resumeInput").value.toLowerCase();
    const job = document.getElementById("jobInput").value.toLowerCase();

    const skills = [
        "windows",
        "microsoft 365",
        "networking",
        "troubleshooting",
        "vpn",
        "active directory",
        "security+",
        "help desk",
        "customer service"
    ];

    let matches = [];
    let missing = [];

    skills.forEach(skill => {
        if (job.includes(skill) && resume.includes(skill)) {
            matches.push(skill);
        } 
        else if (job.includes(skill)) {
            missing.push(skill);
        }
    });

    let score = Math.round((matches.length / skills.length) * 100);

    document.getElementById("output").innerHTML = `
        <strong>Match Score:</strong> ${score}%<br><br>

        <strong>Matching Skills:</strong><br>
        ${matches.length ? matches.join(", ") : "No matches found"}<br><br>

        <strong>Missing Keywords:</strong><br>
        ${missing.length ? missing.join(", ") : "No missing keywords found"}
    `;
}