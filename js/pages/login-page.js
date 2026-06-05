/**
 * Log In Page Component
 */
export function initLoginPage() {
    const appContainer = document.getElementById('app') || document.body;

    appContainer.innerHTML = `
        <div class="container-login">
            <!-- Decorative SVG Blobs -->
            <svg class="login-blob login-blob--top-left" width="126" height="147" viewBox="0 0 126 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="63" cy="73.5" rx="63" ry="73.5" fill="#19C2D2"/>
            </svg>
            <svg class="login-blob login-blob--top-right" width="164" height="137" viewBox="0 0 164 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="82" cy="68.5" rx="82" ry="68.5" fill="#6055F9"/>
            </svg>
            <svg class="login-blob login-blob--bottom-left" width="188" height="197" viewBox="0 0 188 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M188 98.5C188 152.9 145.915 197 94 197C42.0852 197 0 152.9 0 98.5C0 44.1 42.0852 0 94 0C145.915 0 188 44.1 188 98.5Z" fill="#19C2D2"/>
            </svg>
            <svg class="login-blob login-blob--bottom-right" width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="93" cy="93" r="93" fill="#6055F9"/>
            </svg>

            <div class="content-wrapper-login">
                <!-- Mascot & Brand Logo -->
                <div class="login-brand-section">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/ea8a697f27868e776e708642310427e61c25c1f7?width=238" alt="Mascot" class="login-mascot">
                    <img src="https://api.builder.io/api/v1/image/assets/TEMP/1361acab77b6232078e0c8b489874b232a743d53?width=394" alt="Kampusin" class="login-brand-logo">
                </div>

                <!-- Log In Form -->
                <form class="login-form" onsubmit="event.preventDefault();">
                    <div class="login-input-group">
                        <label class="login-label" for="username">Username</label>
                        <div class="login-input-field">
                            <img src="https://api.builder.io/api/v1/image/assets/TEMP/9492f565e149b179f939b753db5c1b04d0e95cde?width=140" alt="" class="login-input-icon">
                            <input type="text" id="username" placeholder="Enter your Username" required>
                        </div>
                    </div>

                    <div class="login-input-group">
                        <div class="login-label-row">
                            <label class="login-label" for="password">Password</label>
                            <a href="#" class="login-forgot-link">Forgot password?</a>
                        </div>
                        <div class="login-input-field">
                            <img src="https://api.builder.io/api/v1/image/assets/TEMP/dd00f6c7c1170edd60fbe940783721a715b88579?width=112" alt="" class="login-input-icon login-input-icon--lock">
                            <input type="password" id="password" placeholder="Enter your Password" required>
                        </div>
                    </div>

                    <p class="login-signup-text">Don't Have An Account? <a href="#/signup">Sign Up Now</a></p>

                    <button type="submit" class="login-btn">Log In</button>
                </form>
            </div>
        </div>
    `;
}
