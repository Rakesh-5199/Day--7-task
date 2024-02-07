var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    console.log(res);

    // Get all the countries from Asia continent/region using Filter function
    var result_asia = res.filter((ele) => ele.region == "Asia");
    console.log(result_asia);
    var country_names = result_asia.map((ele) => ele.name);
    console.log(country_names);

    // Get all the countries with a population of less than 200,000 using Filter function
    var popu = res.filter((ele) => ele.population < 200000);
    console.log(popu);
    var popu_res = popu.map((ele) => ele.capital);
    console.log(popu_res);

    // Print the following details name, capital, flag, using forEach function
    res.forEach(function (country) {
        console.log("Name:", country.name.common);
        console.log("Capital:", country.capital);
        console.log("Flag:", country.flags.svg);
        console.log("-------------------------");
    });

    // Calculate the total population using reduce function
    var totalPopulation = res.reduce(function (acc, country) {
        return acc + country.population;
    }, 0);
    console.log("Total Population:", totalPopulation);

    // Find countries that use US dollars as currency
    var usdCountries = res.filter(function (country) {
        return country.currencies && country.currencies.hasOwnProperty("USD");
    });

    // Print the country/countries that use US dollars as currency
    if (usdCountries.length > 0) {
        console.log("Countries that use US dollars as currency:");
        usdCountries.forEach(function (country) {
            console.log("- " + country.name.common);
        });
    } else {
        console.log("No countries use US dollars as currency.");
    }
};
