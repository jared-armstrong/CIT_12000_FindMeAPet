const allDogs = [
    {

        dogName: "Abby",

        breed: "SharPei",

        age: 7

    },

    {

        dogName: "Akino",

        breed: "Husky",

        age: 5

    },

    {

        dogName: "Allie",
        
        breed: "Pit Bull Terrier Mix",

        age: 6

    },

    {

        dogName: "Aveda",

        breed: "Pit Bull Terrier Mix",

        age: 6

    },

    {

        dogName: "Benji",

        breed: "German Shepherd Mix",

        age: 2

    },

    {

        dogName: "Bentley",

        breed: "Hound Mix",

        age: 2

    },

    {

        dogName: "Bones",

        breed: "Terrier Mix",

        age: 14

    },

    {

        dogName: "Bronson",

        breed: "Terrier, American Pit Bull Mix",

        age: 6

    },

    {

        dogName: "Bruno",

        breed: "Labrador Retrierver/Terrier, Pit Bull Mix",

        age: 7

    },

    {
        
        dogName: "Captain Barbosa",

        breed: "Terrier, American Pit BUll Mix",

        age: 0.5

    }

];


    const showDogs = () => {

        let ageOfDog = document.querySelector("#dogAge").value;

        ageOfDog = parseInt(ageOfDog);
        const selectedDogs = [];
    
        allDogs.forEach(
            (allDogs) => {
                if (allDogs.age >= ageOfDog) {
                    selectedDogs.push(allDogs);
                }
            }
        );

        console.log(selectedDogs);

        let searchedDogs = document.querySelector(".selectedDogInfo");
        str = "";

        selectedDogs.forEach((dog) => {
            if (dog.age >= ageOfDog) {
                str += `${dog.dogName} is a ${dog.breed} who is ${dog.age} years old <br><br>`;
            }
        });

        searchedDogs.innerHTML = str;

    }

