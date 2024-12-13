const arrs = [
    {
        name: "Emmanuel",
        age: 25,
        country: "Canada"
        
    },
    {
        name: "Clinton",
        age: 30,
        country: "Nigeria"
        
    },
    {
        name: "Samuel",
        age: 40,
        country: "United States"
        
    }
]

const finalyArrs = arrs.map((arrs, index) => {
    return {
        index: index + 1,
       ...arrs,
    }
})
console.table(finalyArrs)