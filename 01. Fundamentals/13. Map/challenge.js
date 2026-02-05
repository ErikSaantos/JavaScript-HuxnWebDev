// 1. Create a new Map
// 2. Set these properties ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size

// 1.
const map = new Map();

// 2. and 3.
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

// 4.
console.log(map.get("a"));

// 5.
console.log(map.size);

// 6.
map.delete("b");
console.log(map.size);