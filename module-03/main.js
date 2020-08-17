import axios from 'axios';

//1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const oneByAMinute = async () => {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}
oneByAMinute();

//1.2
const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('Something went wrong...');
    }
}
getUserFromGithub('euguilhermegirardi');

//1.3
// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Something went wrong...');
//         })
//     }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkasdasdas');

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https:/api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.log('Something went wrong...')
        }
    }
}
Github.getRepositories('joaooliveiradev/starter-rocketseat-javascriptES6');


//1.4
const searchUser = user => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Something went wrong...');
    });
}
searchUser('diego3g');


async function searchUser(user) {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch(err) {
        console.log('Something went wrong...');
    }
}

searchUser('diego3g');
