let marks = parseFloat(prompt("Enter your marks (out of 100):"));

if (marks > 100) {
    alert("Invalid input. Marks should not be greater than 100.");
} else {
    switch (true) {
        case (marks > 90):
            alert("Grade: A");
            break;
        case (marks > 80 && marks <= 90):
            alert("Grade: B");
            break;
        case (marks > 35 && marks <= 80):
            alert("Grade: C");
            break;
        default:
            alert("Grade: Failed");
    }
}
