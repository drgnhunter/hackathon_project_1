// const nodeList = document.querySelectorAll("div#list label"); // Dynamic list
// const array = Array.from(nodeList);
// const search = document.getElementById("search"); // Search input
// const listDiv = document.getElementById("list"); // The target div to which you want to append the nodes

// search.addEventListener("input", () => {
//     const searchValue = search.value.toLowerCase();

//     const filteredArray = array.filter(label => {
//         return label.textContent.toLowerCase().includes(searchValue);
//     });

//     // Clear the existing content inside the listDiv
//     listDiv.innerHTML = '';

//     // Append the filtered labels to the listDiv
//     filteredArray.forEach(label => {
//         // Append a label
//         const newLabel = document.createElement('label');
//         newLabel.textContent = label.textContent;
//         newLabel.setAttribute("id",label.textContent);
//         listDiv.appendChild(newLabel);


//         // Append an input (assuming you want an input element after each label)
//         const newInput = document.createElement('input');

//         listDiv.appendChild(newInput);
//     });
// });



// document.getElementById("searchBar").addEventListener("input",()=>{

//     const searchValue2 = document.getElementById("searchBar").value.toLowerCase();

//     console.log(searchValue2)

//     const nodeList2 = document.querySelectorAll("div#list2 div div label")
//     const array2 = Array.from(nodeList2);

//     console.log(nodeList2);

//     const filteredArray = array2.filter(label => {
//         return label.textContent.toLowerCase().includes(searchValue2);
//     });

//     console.log(filteredArray);

//     const listDiv =  document.getElementById("newList");
//     // Clear the existing content inside the listDiv
//     listDiv.innerHTML = '';

//     // Append the filtered labels to the listDiv
//     filteredArray.forEach(label => {
//         // Append a label
//         const div1 = document.createElement("div");
//         div1.setAttribute("id","list2");

//         const img = document.createElement("img");
//         const div2 = document.createElement("div");
//         const div3 = document.createElement("div");


//         const newElement = document.createElement("div");
//         newElement.textContent = label.textContent; // Set the content of the new element

//         div1.appendChild(img);
//         div1.appendChild(div2);
//         div1.appendChild(div3);

//         img.classList.add("w-20")
//         img.src ="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg";

//         // Append the new element to the selected listDiv
//         listDiv.appendChild(img);
//         listDiv.appendChild(newElement);


//     });


// })


const img = [
    {
        label: "Product 2",
        src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg"
    },
    {
        label: "Product 1",
        src: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg"
    },
    {
        label: "Product 3",
        src: "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg"
    }
]

document.getElementById("searchBar").addEventListener("input", (event) => {
    const searchText = document.getElementById("searchBar").value.toLowerCase();

    console.log(searchText);

    const filteredArray = img.filter((imgObject) => {
        return imgObject.label.toLowerCase().includes(searchText)
    })

    console.log(filteredArray);



    const displayDiv = document.getElementById("newList");
    displayDiv.innerHTML = '';



    filteredArray.forEach((value)=>{
        const imgLabel = value.label;
        const imgSrc = value.src;

        const img = document.createElement("img");
        const label = document.createElement("label");
        
        label.innerHTML = imgLabel
        img.src = imgSrc;
        
        displayDiv.appendChild(label);
        displayDiv.appendChild(img);
    })

})