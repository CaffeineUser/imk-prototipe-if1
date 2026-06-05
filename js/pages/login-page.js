/**
 * Log In Page Component
 */
export function initLoginPage() {
    const appContainer = document.getElementById('app') || document.body;

    appContainer.innerHTML = `
        <div class="container-login">
            <!-- Decorative Blobs (Figma Position) -->
            <div class="blob blob-top-right-login"></div>
            <div class="blob blob-bottom-left-login"></div>

            <div class="content-wrapper-login">
                <!-- Mascot & Brand Logo -->
                <div class="brand-section">
                    <img src="https://www.figma.com/api/mcp/asset/4b17c190-b5c8-4ce9-b16f-08a37325ee68" alt="Mascot" class="login-mascot">
                    <img src="https://www.figma.com/api/mcp/asset/76d261a1-17bd-4cbc-8b48-e563dddeefcb" alt="Kampusin" class="login-brand-name">
                </div>

                <!-- Log In Form -->
                <form class="login-form" onsubmit="event.preventDefault();">
                    <div class="input-group">
                        <label for="username">Username</label>
                        <div class="input-field">
                            <input type="text" id="username" placeholder="Enter your Username" required>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="label-row">
                            <label for="password">Password</label>
                            <a href="#" class="forgot-link">Forgot password?</a>
                        </div>
                        <div class="input-field">
                            <input type="password" id="password" placeholder="Enter your Password" required>
                        </div>
                    </div>

                    <button type="submit" class="btn-login">Log In</button>
                </form>

                <!-- Footer Sign Up Link -->
                <p class="signup-text">Don’t Have An Account? <a href="#/signup">Sign Up Now</a></p>
            </div>
        </div>
    `;
}