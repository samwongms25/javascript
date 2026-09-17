const p = {
    name: 'sam',
    age: 40
}

console.log(p.age)
console.log(p)
p.country = 'china'
p.gender = 'male'

for (let i in p) {console.log(i, p[i])}
