const books = [
    {
        id : 1,
        title : "Getting started with Java",
        author : "Manoj Sharma",
        rating : "4"
    },
    {
        id : 2,
        title : "Let us C++",
        author : "Abdul Bari",
        rating : "5"
    },
    {
        id : 3,
        title : "Data structures and algorithm",
        author : "Prasant Acharya",
        rating : "4"
    },
    {
        id : 4,
        title : "Amazon web service for beginners",
        author : "Danish redcliff",
        rating : "3"
    },
    {
        id : 5,
        title : "Mastering .NET framework",
        author : "Anish Jain",
        rating : "5"
    },
]

const filterAndSort = (book) =>{
    const titles = book.map((Element) =>{
        return(
            Element.title
        )
    })

    return titles.sort();
}

console.log(filterAndSort(books));