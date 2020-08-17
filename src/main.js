import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = (event) => this.addRepository(event);
    }

    setLoading(loading = true) {
      if (loading === true) {
        let loadingEl = document.createElement('span');
        loadingEl.appendChild(document.createTextNode('Loading...'))
        loadingEl.setAttribute('id', 'loading');

        this.formEl.appendChild(loadingEl);
      } else {
        document.getElementById('loading').remove();
      }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
          return;

        this.setLoading();

        try {
          const response = await api.get(`/users/${repoInput}`);

        console.log(response);

        const { name, bio, blog, html_url, avatar_url } = response.data;

        this.repositories.push({
            name,
            bio,
            blog,
            avatar_url,
            html_url,
        });

        this.inputEl.value = '';

        this.render();
        } catch (err) {
          alert('Something went wrong...')
        }

        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let bioEl = document.createElement('p');
            bioEl.appendChild(document.createTextNode(repo.bio));

            let blogEl = document.createElement('p');
            blogEl.appendChild(document.createTextNode(repo.blog));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Access'));

            let listItemEL = document.createElement('li');
            listItemEL.appendChild(imgEl);
            listItemEL.appendChild(titleEl);
            listItemEL.appendChild(bioEl);
            listItemEL.appendChild(blogEl);
            listItemEL.appendChild(linkEl);

            this.listEl.appendChild(listItemEL);
        });
    }
}

new App();
