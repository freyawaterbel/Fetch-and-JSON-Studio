window.addEventListener("load", function() {
    const container = document.getElementById("container");
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                container.innerHTML = +`<div class="astronaut">
                <div class="bio">
                    <h3>${json["firstName"]} ${json["lastName"]}</h3>
                        <ul>
                            <li>Hours in space: ${json["hoursInSpace"]}</li>
                            <li>Active: ${json["active"]}</li>
                            <li>Skills: ${json["skills"]}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json["picture"]}">
                </div>`
            };
        });
    });
})
