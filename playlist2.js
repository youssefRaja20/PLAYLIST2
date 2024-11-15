

// Function to change the video source
function changeVideo(videoPath) {
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Log to console to ensure the function is triggered
    console.log("Changing video to:", videoPath);
    
    // Set the video source to the new video file
    videoPlayer.src = videoPath;

    // Ensure the video loads correctly
    videoPlayer.load();  // This will ensure the video element is updated with the new video
    videoPlayer.play();  // Play the video immediately

    // Log the status of the video to ensure it's playing
    videoPlayer.onplay = () => {
        console.log("Video is playing.");
    };

    // Log any error loading the video
    videoPlayer.onerror = (error) => {
        console.log("Error loading video:", error);
    };
}
