
        Задание:
        Создайте два объекта, используя конструктор и литерал. Оба объекта должны содержать свойства firstName и lastName
        с произвольными значениями. Создайте функцию print, которая будет принимать в качестве параметра объект и выводить свойства
        lastName и firstName полученного объекта на экран.
		
		let userLiteral = {
			firstName: "Vasya",
			lastName: "Petrov"
		}
		function User(firstName, lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}
		
		let userConstructor = new User("Petrik", "Pyatochkin");
		
		function print(user) {
			if(("firstName" in user) && ("lastName" in user)){
				console.log('User[' + user.firstName + ', ' + user.lastName + ']');
			}
		}
		
		
		print(userLiteral);
		print(userConstructor);