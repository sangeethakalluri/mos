import React from "react";

function Login() {
  return (
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="row w-100 m-0">
          <div class="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div class="card col-lg-4 mx-auto">
              <div class="card-body px-5 py-5">
                <h3 class="card-title text-left mb-3">Mercury Cloud</h3>
                <h6 class="card-title text-left mb-3">Login</h6>
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control p_input"
                      placeholder="Account ID"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control p_input"
                      placeholder="User ID"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control p_input"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group d-flex align-items-center justify-content-between">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" />{" "}
                        Remember me{" "}
                      </label>
                    </div>
                    <a href="/" class="forgot-pass">
                      Forgot password
                    </a>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block enter-btn"
                    >
                      Login
                    </button>
                  </div>
                  <p class="sign-up">
                    Don't have an Account?<a href="/"> Sign Up</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
