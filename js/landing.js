/**
 * Navigation: Landing to Log In
 */
function redirectToLogin() {
    // Gunakan router untuk navigate ke login
    if (typeof router !== 'undefined' && router.navigate) {
        router.navigate('/login'); 
    } else {
        // Fallback: gunakan hash navigation
        window.location.hash = '#login';
    }
}