function changePage() {

    // (a)
    const header = document.getElementById("heading");
    header.textContent = "Updated Title";

    const usernameInput = document.getElementsByName("username")[0];
    usernameInput.value = "John Doe";

    const genderRadios = document.getElementsByName("gender");
    genderRadios.forEach(radio => {
        if (radio.checked) {
            console.log("Selected gender: " + radio.value);
        }
    });

    // (c)
    const paragraphs = document.getElementsByTagName("p");
    console.log("Total number of <p> elements: " + paragraphs.length);

    const listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        console.log("List item: " + listItems[i].textContent);
    }

    // (d)
    const inputFields = document.getElementsByClassName("input-field");
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].style.backgroundColor = "lightblue";
    }

    // (e)
    const firstInfoParagraph = document.querySelector("p.info");
    firstInfoParagraph.textContent = "This is the first info paragraph";

    const firstGenderRadio = document.querySelector("input[name='gender']");
    firstGenderRadio.checked = true;

    // (f)
    const infoParagraphs = document.querySelectorAll("p.info");
    infoParagraphs.forEach(paragraph => {
        console.log(paragraph.textContent);
    });

    const hobbyCheckboxes = document.querySelectorAll("input.hobby");
    hobbyCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
        console.log("Checked hobby: " + checkbox.value);
    });
}