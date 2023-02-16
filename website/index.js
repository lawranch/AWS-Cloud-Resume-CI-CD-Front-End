var counterContainer = document.querySelector(".website-counter");
fetch("https://depg89kty3.execute-api.us-east-1.amazonaws.com/default/cloud-resume-IncrementVisitorCountFunction-mJgzuo4QU6Qr", {
    method: "GET"})
    .then(res => res.json())
    .then(data => {
        visitCount = data;
    })
    .then(() => {
        counterContainer.innerHTML = "VISIT COUNT: " + visitCount;
    })
    .catch(error => console.log("ERROR"));