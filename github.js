class GitHub {
    constructor() {
        this.id = "efaf668d7887ccc23753";
        this.secret = "7b3fac242af2f2d51e6c59679631ab7e973aff27";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        // fetch user profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secret}`);

        // fetch user repos
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.id}&client_secret=${this.secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}