
        //Задание:
        //Выведите на экран свойства first и last из вложенного объекта name. Поменяйте значение свойства balance на '$2000'. Удалите свойство email.
        //Выведите на экран все содержимое объекта с помощью кода console.log(user)

        let user = {
            balance: '$1,250.89',
            age: 24,
            name: {
                first: 'Golden',
                last: 'Clements'
            },
            company: 'EWAVES',
            email: 'golden.clements@ewaves.io',
            friends: [
                {
                    id: 0,
                    name: 'Buchanan Austin'
                },
                {
                    id: 1,
                    name: 'Richmond Garrison'
                },
                {
                    id: 2,
                    name: 'Burns Cook'
                },
                {
                    id: 3,
                    name: 'Sally Mcpherson'
                }
            ],
            favoriteFruit: 'strawberry'
        }
		
		console.log('first = ' + user.name.first);
		console.log('last = ' + user.name.last);
		user.balance = '$2000';
		delete user.email;
		console.log(user);