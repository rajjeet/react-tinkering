import axios from 'axios';

export const getRepos = (org) => {
    axios.get(`https://api.github.com/orgs/${org}/repos`)
        .then(data => {
                return data.map(r => r.name);
            }
        )
        .catch(err => console.error(err));
};

export const getIssues = (org, repo) => {
    axios.get(`https://api.github.com/repos/${org}/${repo}/issues`)
        .then(data => {
            return data.filter(i => i.state === "open").map(i => i.title);
        })
        .catch(err => console.error(err));
}