const axios = require('axios');

module.exports = {
    function1() {
        return 2
    },

    func1() {
        return "Tyler"
    },
    func2(param) {
        if (param === 1) {
            return 1
        } else if (param === 2) {
            return 'fizz'
        } else if (param === 3) {
            return 'buzz'
        } else if (param === 5) {
            return 5
        } else if (param === 4) {
            return 'fizz'
        } else if (param === 12) {
            return 'fizzbuzz'
        } else if (param === 77) {
            return 'tyler'
        } else if ( param === 18) {
            return new Error('yuck, octopus flavor');
        }
    },

    getInternetData() {
        return axios.get('https://swapi.co/api/people')
        .then(response => response.data.results)
    }


}

