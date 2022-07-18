function createParagraph() {
    let word1 = document.getElementById("lib1").value;
    let word2 = document.getElementById("lib2").value;
    let word3 = document.getElementById("lib3").value;
    let word4 = document.getElementById("lib4").value;
    let word5 = document.getElementById("lib5").value;
    let word6 = document.getElementById("lib6").value;
    let word7 = document.getElementById("lib7").value;
    let word8 = document.getElementById("lib8").value;
    let word9 = document.getElementById("lib9").value;
    let word10 = document.getElementById("lib10").value;
    let word11 = document.getElementById("lib11").value;
    let word12 = document.getElementById("lib12").value;
    let word13 = document.getElementById("lib13").value;
    let word14 = document.getElementById("lib14").value;
    let word15 = document.getElementById("lib15").value;
    let word16 = document.getElementById("lib16").value;
    let word17 = document.getElementById("lib17").value;
    let word18 = document.getElementById("lib18").value;
    let word19 = document.getElementById("lib19").value;
    let word20 = document.getElementById("lib20").value;
    let word21 = document.getElementById("lib21").value;
    let word22 = document.getElementById("lib22").value;

    var paragraph = "There are many " + word1 + " ways to choose a/an " + word2 + " to read. First, you could ask for recommendations from your friends and " + word3 + ". Just don't ask Aunt " + word4 + "--she only reads " + word5 + " books with " + word6 + "-ripping goddesses on the cover. If your friends and family are no help, try checking out the " + word7.charAt(0).toUpperCase() + " Review in <em>The " + word8 + " Times</em>. If the " + word9 + " featured there are too " + word10 + " for your taste, try something a little more low-" + word11 + ", like <em>" + word12 + ": The " + word13 + " Magazine</em>, or <em>" + word14 + " Magazine</em>. You could also choose a book the " + word15 + "-fashioned way. Head to your local library or " + word16 + " and browse the shelves until something catches your " + word17 + ". Or, you could save yourself a whole lot of " + word18 + " trouble and log on to www.bookish.com, the " + word19 + " new website to " + word20 + " for books! With all the time you'll save not having to search for " + word21 + ", you can read " + word22 + " more books!"

    document.getElementById('output').innerHTML = paragraph;
}

// document.getElementById("submitButton").onclick = function () {
//     console.log("This ran too.")
//     createParagraph();
// }

// Moved onclick logic to form.onsubmit to check that required fields are being filled.