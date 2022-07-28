function createParagraph() {
    let words = [];

    for (i = 1; i <= 22; i++) {
        words.push(document.getElementById("lib" + i).value);
    }

    let paragraph = "There are many " + words[0] + " ways to choose a/an " + words[1] + " to read. First, you could ask for recommendations from your friends and " + words[2] + ". Just don't ask Aunt " + words[3] + "--she only reads " + words[4] + " books with " + words[5] + "-ripping goddesses on the cover. If your friends and family are no help, try checking out the " + words[6].charAt(0).toUpperCase() + " Review in <em>The " + words[7] + " Times</em>. If the " + words[8] + " featured there are too " + words[9] + " for your taste, try something a little more low-" + words[10] + ", like <em>" + words[11] + ": The " + words[12] + " Magazine</em>, or <em>" + words[13] + " Magazine</em>. You could also choose a book the " + words[14] + "-fashioned way. Head to your local library or " + words[15] + " and browse the shelves until something catches your " + words[16] + ". Or, you could save yourself a whole lot of " + words[17] + " trouble and log on to www.bookish.com, the " + words[18] + " new website to " + words[19] + " for books! With all the time you'll save not having to search for " + words[20] + ", you can read " + words[21] + " more books!"

    document.getElementById('output').innerHTML = paragraph;
}