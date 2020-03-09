let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://spreadsheets.google.com/feeds/list/1t0qkcAYCxxrVNQ3TpLGhP3ovSpSgrcyShWTxNN_8zNE/od6/public/values?alt=json", requestOptions)
    .then(response => response.json()) // This parses date from string to object
    .then(result => {
        // console.log(result) // This provides us access to the parse data]
        let projects = result.feed.entry.map(project => {
            // console.log('project', project.gsx$title.$t)
            return {
                title: project.gsx$title.$t,
                description: project.gsx$description.$t,
                icon: project.gsx$projecticon.$t,
                repoURL: project.gsx$url.$t,
                youtubeURL: project.gsx$url.$t,
                article: project.gsx$url.$t
            }
        })
        // console.log(projects)
        app(projects)
    })
    .catch(error => console.log('error', error));

function app(projects) {
    console.log('app-projects', projects)
}
