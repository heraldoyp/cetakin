<template>
  <div>
    <!-- <img src="../assets/background_hd.jpg" alt=""> -->
    <!-- <img src="images/logo.jpg" alt=""> -->
    <div class="uk-position-top">
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;" id="background-color">
            <div class="uk-navbar-left">
              <router-link to="/"><img id="cetakin-logo-navbar" width="40" src="../assets/cetakin_logo_3_white.png" alt=""></router-link>
              <ul class="uk-navbar-nav" id="navbar-kiri">
                  <li><a href="#" style="color: #000000;">Service</a></li>
                  <li><a href="#" style="color: #000000;">About us</a></li>
                  <li><a href="#" style="color: #000000;">Contact</a></li>
              </ul>
            </div>
            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav" id="navbar-kanan">
                <li><a type="button" uk-toggle="target: #offcanvas-flip" style="color: #000000;">Login</a></li>
                <li><a type="button" uk-toggle="target: #offcanvas-flip" style="color: #000000;">Register</a></li>
                <li><a type="button" uk-toggle="target: #offcanvas-flip" style="color: #000000;">Join as a Vendor</a></li>
              </ul>
            </div>
        </nav>
      </div>
    </div>
    
    
    <!-- Off Canvas -->
    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true; mode: push">
      <div class="uk-offcanvas-bar">

        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <h3 id="sign-in">Sign In</h3>
        <form class="uk-form-stacked">
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">Email</label>
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input" id="email" type="text" v-model="email">
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Password</label>
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: lock"></span>
                    <input class="uk-input" id="password" type="password" v-model="password">
                </div>
            </div>
            <div class="uk-margin">
              <label><input class="uk-checkbox" type="checkbox">  Keep me signed in</label>
            </div>
            <div class="uk-margin">
              <button class="uk-button" type="button" id="signin-button" v-on:click="login">Sign In</button>
            </div>
        </form>

        <div class="uk-margin">
          <div id="dont-have-any-account">
            <p>don't have any account yet?</p>
          </div>
          <div id="other-login-choice">
           <p><router-link id="register-vendor" to="/register-user">Register</router-link> or <router-link id="register-vendor" to="/register">Join as a Vender</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Navbar',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function(e) {
      console.log(this.email, this.password);
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        alert(`You are logged in as ${this.email}`)
        this.$router.go({path: this.$router.path})
      },
        err => {
          alert(err.message);
        }
      );

      e.preventDefault();
    }
  }
};
</script>

<style>  
  #background-color {
    background-color: #58C47B;
  }

  #cetakin-logo-navbar {
    margin-left: 30px;
  }

  #dont-have-any-account {
    margin-top: 20px;
    margin-bottom: 0px;
    border-top: 1px solid #8CFFB1;
    color: #8CFFB1;
  }

  #navbar-kanan {
    margin-right: 20px;
  }

  #navbar-kiri {
    margin-left: 30px;
  }

  #other-login-choice {
    margin-top: 0px;
  }

  #register-vendor {
    text-decoration: none;    
  }

  #register-vendor:hover {
    transition: 0.3s;
    color: #8CFFB1;
    text-decoration: underline;
  }

  #sign-in {
    color: #8CFFB1;
  }

  #signin-button {
    width: 150px;
    height: 45px;
    border-radius: 35px;
    background-color: #8CFFB1;
    color: #262626;
    font-size: 18px;
    border: 3px solid #8CFFB1;
  }

  #signin-button:hover {
    transition: 0.3s;
    background-color: #262626;
    color: #8CFFB1;

  }
</style>
