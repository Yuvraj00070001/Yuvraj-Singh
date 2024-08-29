// Updated list of currently running trains in India


// Function to display running trains
function displayRunningTrains() {
    const trainInfo = document.getElementById('train-info');
    trainInfo.innerHTML = ''; // Clear previous data

    runningTrains.forEach(train => {
        const trainDiv = document.createElement('div');
        trainDiv.innerHTML = `<strong>${train.name} (Train No. ${train.number})</strong> - Route: ${train.route}, Status: ${train.status}`;
        trainInfo.appendChild(trainDiv);
    });
}

// Display running trains when the page loads
window.onload = function() {
    displayRunningTrains();
};

// Event listener for Home button
document.getElementById('home-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home-section').classList.remove('hidden');
    document.getElementById('about-section').classList.add('hidden');
    document.getElementById('trains-section').classList.add('hidden');
    document.getElementById('train-list-section').classList.add('hidden');
    document.getElementById('reservation-section').classList.add('hidden');
    document.getElementById('confirmation-section').classList.add('hidden');
    displayRunningTrains(); // Re-display train information when Home is clicked
});

// Event listener for About button
document.getElementById('about-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('about-section').classList.remove('hidden');
    document.getElementById('trains-section').classList.add('hidden');
    document.getElementById('train-list-section').classList.add('hidden');
    document.getElementById('reservation-section').classList.add('hidden');
    document.getElementById('confirmation-section').classList.add('hidden');
});

// Event listener for Trains button
document.getElementById('trains-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('about-section').classList.add('hidden');
    document.getElementById('trains-section').classList.remove('hidden');
    document.getElementById('train-list-section').classList.add('hidden');
    document.getElementById('reservation-section').classList.add('hidden');
    document.getElementById('confirmation-section').classList.add('hidden');
});
