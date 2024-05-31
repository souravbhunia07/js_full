// const requestUrl = 'https://api.github.com/users/HeavyCoder07';
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestUrl);
// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4) {
//         const data = JSON.parse(xhr.responseText);
//         console.log(data.followers);
//     }
// }
// xhr.send(); // This will send the request to the server
// console.log("Sent!");
// console.log(xhr.readyState);

const user = document.getElementById('username');
const avatar = document.getElementById('avatar');
const followers = document.getElementById('followers');
const btn = document.getElementById('btn');
const name = document.getElementById('name');

btn.addEventListener('click', () => {
    const requestUrl = `https://api.github.com/users/${user.value}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 404) {
                console.error('User not found');
                return;
            }
            const data = JSON.parse(xhr.responseText);
            avatar.src = data.avatar_url;
            name.textContent = `Name: ${data.name ? data.name : data.login}`;
            followers.textContent = `Followers: ${data.followers}`;
        }
    }
    xhr.send();

    document.getElementById('card').style.display = 'flex';
});

// Get the followers button and followers list elements
const followersBtn = document.getElementById('followersBtn');
const followersList = document.getElementById('followersList');

// Add an event listener to the followers button
followersBtn.addEventListener('click', () => {
    // Construct the request URL
    const requestUrl = `https://api.github.com/users/${user.value}/followers`;

    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Initialize the request
    xhr.open('GET', requestUrl);

    // Define what happens on ready state change
    xhr.onreadystatechange = () => {
        // If the request is complete
        if(xhr.readyState === 4) {
            // If the request failed
            if(xhr.status === 404) {
                console.error('User not found');
                return;
            }

            // Parse the response data
            const data = JSON.parse(xhr.responseText);

            // Clear the followers list
            followersList.innerHTML = '';

            // Add each follower to the followers list
            data.forEach(follower => {
                // Create a new list item
                const li = document.createElement('li');

                // Set the list item's text content
                li.textContent = `Name: ${follower.name ? follower.name : follower.login}`;

                // Add the list item to the followers list
                followersList.appendChild(li);
            });
        }
    }

    // Send the request
    xhr.send();
});