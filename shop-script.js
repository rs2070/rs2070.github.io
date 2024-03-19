// Get all square buttons
const squareButtons = document.querySelectorAll('.square-title');

// Get all popups
const popups = document.querySelectorAll('.popup');

// Initialize variable to track active popup
let activePopup = null;

// Add click event listeners to each square button
squareButtons.forEach((button, index) => 
{
    button.addEventListener('click', () => 
    {
        const square = button.parentElement;
        const popup = popups[index];
        const songButtons = popup.querySelectorAll('.extra-title:not(.full-link)'); // Get song buttons


        // Toggle active class on the clicked square
        square.classList.toggle('active');

        // Hide other popups and update activePopup
        popups.forEach(popup => 
        {
            if (popup !== activePopup) 
            {
                popup.style.display = 'none';
                popup.parentElement.classList.remove('active');
            }
        });

        // Toggle display of the clicked popup
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';

        // Update activePopup
        activePopup = popup.style.display === 'block' ? popup : null;

        // Add click event listeners to song buttons inside popup
// Add click event listeners to song buttons inside popup
    songButtons.forEach(songButton => 
    {
        songButton.addEventListener('click', (event) => 
        {
            const songName = event.target.textContent.trim();
            console.log('Button Name:', songName);

            // Pause any currently playing audio
            document.querySelectorAll('.music-player').forEach(player => 
            {
                player.pause();
                player.currentTime = 0; // Reset playback to the beginning
            });

            // Find the audio element within the popup
            const popup = songButton.closest('.popup');
            const audioElement = popup.querySelector('.music-player');

            // Set the source of the audio element to the clicked song
            audioElement.src = songName.toLowerCase() + '.mp3'; // Construct the file path

            // Play the audio
            audioElement.play();
        });
    });
    
    // Get all "FULL LINK" buttons
    const fullLinkButtons = document.querySelectorAll('.extra-title.full-link');

    // Attach click event listener to "FULL LINK" buttons
    fullLinkButtons.forEach((fullLinkButton, index) => 
    {
        fullLinkButton.addEventListener('click', () => 
        {
            switch (index) 
            {
                case 0:
                    //fullLinkButton.textContent = '1'; // Change the text for the first button
                    // Handle first button's action
                    window.location.href = 'https://soundcloud.com/user-985236963/afterthought-prod-rulah';
                    break;
                case 1:
                    //fullLinkButton.textContent = '2'; // Change the text for the second button
                    // Handle second button's action
                    window.location.href = 'https://the-empire.sellfy.store/p/823/';
                    break;
                case 2:
                    //fullLinkButton.textContent = '3'; 
                    window.location.href = 'https://the-empire.sellfy.store/p/723/';
                    break;    
                case 3:
                    //fullLinkButton.textContent = '4'; 
                    window.location.href = 'https://the-empire.sellfy.store/p/623/';
                    break;
                case 4:
                    //fullLinkButton.textContent = '5'; 
                    window.location.href = 'https://the-empire.sellfy.store/p/523/';
                    break;    
                case 5:
                    //fullLinkButton.textContent = '6';
                    window.location.href = 'https://the-empire.sellfy.store/p/423/'; 
                    break;
                case 6:
                    //fullLinkButton.textContent = '7'; 
                    window.location.href = 'https://the-empire.sellfy.store/p/323/';
                    break; 
                case 7:
                    //fullLinkButton.textContent = '8'; 
                    window.location.href = 'https://the-empire.sellfy.store/p/223/';
                    break; 
                case 8:
                    //fullLinkButton.textContent = '9'; 
                    window.location.href = 'https://the-empire.sellfy.store/p/123/';
                    break;   
                case 9:
                    //fullLinkButton.textContent = '10'; 
                    window.location.href = 'https://soundcloud.com/user-985236963/mmxxii-prod-rulah';
                    break;                              
                default:
                    break;
            }
        });
    });






    });
});
