<template>
  <div>
    <Navbar/> 
    <div class="register-component">
      <div class="uk-grid-small uk-child-width-expand@l" uk-grid>
       
        <div>
          <div class="register-image">
            <div class="uk-text-left">
              <img id="cetakin-logo-green" src="../assets/logo-cetakin-green.png" width="350" alt="">
              <h2 id="marketing-text-h2">Register Now, <br>Get Access to Unlimited Printing Services!</h2>
            </div>
            <img id="device-image" src="../assets/device2.png" width="400" alt="">
          </div>
        </div>
        
        <div>  
          <div class="register-form">
            <div class="uk-card uk-card-default uk-card-body">
              <h3 class="uk-text-left">Register</h3>
              <form class="uk-form-stacked" action="">
                <div class="uk-margin uk-text-left">
                  <label class="uk-form-label" for="form-stacked-text">First Name</label>
                  <div class="uk-form-controls">
                    <input class="uk-input" id="first-name-form" type="text" placeholder="Input your First Fame..." v-model="firstName">
                  </div>
                </div>
                <div class="uk-margin uk-text-left">
                  <label class="uk-form-label" for="form-stacked-text">Last Name</label>
                  <div class="uk-form-controls">
                    <input class="uk-input" id="last-name-form" type="text" placeholder="Input your Last Name..." v-model="lastName">
                  </div>
                </div>
                <div class="uk-margin uk-text-left">
                  <label class="uk-form-label" for="form-stacked-text">Email</label>
                  <div class="uk-form-controls">
                    <input class="uk-input" id="email-form" type="email" placeholder="Input your Email..." v-model="email">
                  </div>
                </div>
                <div class="uk-margin uk-text-left">
                  <label class="uk-form-label" for="form-stacked-text">Phone Number</label>
                  <div class="uk-form-controls">
                    <input class="uk-input" id="phone-number-form" type="text" placeholder="Input your Phone Number..." v-model="phoneNumber">
                  </div>
                </div>
                <div class="uk-margin uk-text-left">
                  <label class="uk-form-label" for="form-stacked-text">Password</label>
                  <div class="uk-form-controls">
                    <input class="uk-input" id="password-form" type="password" placeholder="Input your Password..." v-model="password">
                  </div>
                </div>
                <div class="uk-margin uk-text-left">
                  <label class="uk-form-label" for="form-stacked-text">Verify Password</label>
                  <div class="uk-form-controls">
                    <input class="uk-input" id="confirm-password-form" type="password" placeholder="Confirm your Password..." v-model="confirmedPassword">
                  </div>
                </div>
                <div class="uk-margin uk-text-right">
                  <button class="uk-button" type="button" id="register-button" v-on:click="register">Register</button>
                </div>
              </form>  
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import firebase from 'firebase';
import Navbar from './Navbar';
import Footer from './Footer';

export default {
  name: 'RegisterUser',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmedPassword: '',
    }
  },
  methods: {
    register: function(e) {
      var identity = {
        FirstName: this.firstName,
        LastName: this.lastName,
        Email: this.email,
        PhoneNumber: this.phoneNumber,
        Password: this.password,
        ConfirmedPassword: this.confirmedPassword
      }
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h3 {
    color: #58C47B;
  }

  .register-component {
    margin-left: 5%;
    margin-right: 5%;
    margin: 150px 5% 0 5%;
  }

  .register-form {
    width: 35em;
    margin-left: 50px;
  }

  #device-image {
    margin-top: 50px;
  }

  #marketing-text-h2 {
    margin-top: 0;
  }

  #register-button {
    width: 150px;
    height: 45px;
    border-radius: 35px;
    background-color: #58C47B;
    color: #ffffff;
    font-size: 18px;
    border: 3px solid #58C47B;
  }

  #register-button:hover {
    transition: 0.3s;
    background-color: #ffffff;
    color: #58C47B;

  }
</style>
