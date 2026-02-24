// Fetch API promise only rejects when we've network error
// (not in other cases).

// text method returns promise
// if resolved will return text representation of body

// --- Wrong way --
// console.log(fetch("text.txt"));

// fetch("text.txt")
//     .then((res) => {
//         if (!res.ok) throw Error(res.statusText); //ok is a field in fetch
//         result.innerText = res.text();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// -- Correct way --
const result = document.querySelector("h1");

async function renderData() {
    try {
        const response = await fetch("text.txt");

        if (!response.ok) throw Error(response.statusText);
        
        const data = await response.text();
        result.textContent = data;
    } catch (error) {
        console.log(error);
    }
}

renderData();