// Function to handle "Register your Face" action
function registerFace() {
    const video = document.getElementById('cameraStream');
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error("Camera access denied or not available.", error);
        });
    } else {
        alert("Camera not supported on this device.");
    }
}

// Function to handle "Upload Video to Check" action
function uploadVideo() {
    // For now, just alert the user
    alert("Redirecting to video upload...");
    // Logic to open the video upload page or form would go here
}
