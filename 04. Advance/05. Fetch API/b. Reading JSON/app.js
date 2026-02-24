const result = document.querySelector("h1");

async function renderData(){
    try{
        const resp = await fetch("data.json");
        
        if (!resp.ok) throw Error(resp.statusText);
        
        const data = await resp.json();

        // result.textContent = data.name;
        result.textContent = data.age;
    } catch(error) {
        console.log(error);
    }
}

renderData();