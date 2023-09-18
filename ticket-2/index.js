function extractInitialsFromFullName(fullName) {
/** Assumes that each name within the full name is separated by a "space" that can be used as a separator/delimiter.  */
const names = fullName.split(" ");
// .split is used to split a string into an array of individual characters
//names is an array where each element represents a single character from the original string
let initials = "";

    for (let i = 0; i < names.length; i++) {
        const currentName = names[i];
        const currentInitial = currentName[0];
        initials += currentInitial;
    }
    return initials;
}


console.log(extractInitialsFromFullName("Abe Maxwell"));
console.log(extractInitialsFromFullName("Martin Boxer Harris"));
console.log(extractInitialsFromFullName("Felicity Rita Sarah Jones"));
console.log(extractInitialsFromFullName("Mary Petunia"));



// | Function call                                            | Expected output |
// | -------------------------------------------------------- | --------------- |
// | extractInitialsFromFullName("Abe Maxwell")               | "AM"            |
// | extractInitialsFromFullName("Martin Boxer Harris")       | "MBH"           |
// | extractInitialsFromFullName("Felicity Rita Sarah Jones") | "FRSJ"          |
// | extractInitialsFromFullName("Mary Petunia")              | "MP"            |