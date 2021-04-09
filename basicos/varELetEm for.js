const funcsVar = []

for (var i = 0; i < 10; i++) {
    funcsVar.push(function() {
        console.log(i)
    })
}

funcsVar[2]()
funcsVar[8]()

const funcsLet = []

for (let i = 0; i < 10; i++) {
    funcsLet.push(function() {
        console.log(i)
    })
}

funcsLet[2]()
funcsLet[6]()
funcsLet[8]()