class GitHub {
    constructor() {
        this.client_id ='2b742a8bd5fcb7a8e026';
        this.client_secret ='caa449333fe9ba97d0fc9d85f05cd6136cda329b';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();

        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }

    }
}