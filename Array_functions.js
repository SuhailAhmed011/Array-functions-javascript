//Array functions (start)

      //  let languages = ['javascript' , 'python' , 'node js' , 'c'];
      // let length = languages.length;
      //languages.push('ruby');
      //languages.pop();
      //languages.unshift('mongo db');
      //languages.shift();
      // console.log(languages);

      // (end)

      //Loops in Array (start)

      let cars = [
        {
          name: "Fortuner",
          price: 40
        },

        {
          name: "Range rover",
          price: 50
        },

        {
          name: "Porche",
          price: 60
        },
      ];

       for (let i = 0; i < cars.length; i++) {
        cars[i].price = cars[i].price - 10;
       }
      console.log(cars);

      cars.forEach((cars) => {
          cars.price= cars.price - 10;

      });

      console.log(cars); 


      for(let car of cars){
        car.price = car.price - 10;
      }

      console.log(cars);

      let user = [
        {
            fname: 'suhail',
            lname: 'ahmed'
        },

        {
            fname: 'junaid',
            lname: 'khan'
        },

        {
            fname: 'aayesha',
            lname: 'sheikh'
        }

      ];

       let finaluser = user.map((user) =>{
        return{
            fullname: ` ${user.fname}  ${user.lname}`
        };
       } );

       console.log(finaluser); 

      let movies = [
        {
          name: "Pathan",
          budget: 200,
        },

        {
          name: "Hum",
          budget: 100,
        },

        {
          name: "Harry potter",
          budget: 450,
        },
      ];
      let total = 0;
      movies.forEach((movie) => {
        total += movie.budget;
      });

      console.log(total);