<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Register</div>
          <div class="panel-body">
            <form class="form-horizontal" @submit.prevent="handleRegister">
              <div class="form-group">
                <label class="control-label col-md-4">First name</label>
                <div class="col-md-6">
                  <input type="text" v-model="first_name" class="form-control" required  />
                </div>
              </div><!-- /.form-group -->
              <div class="form-group">
                <label class="control-label col-md-4">Last name</label>
                <div class="col-md-6">
                  <input type="text" v-model="last_name" class="form-control" required  />
                </div>
              </div><!-- /.form-group -->
              <div class="form-group">
                <label class="control-label col-md-4">Email name</label>
                <div class="col-md-6">
                  <input type="email" v-model="email" class="form-control" required  />
                </div>
              </div><!-- /.form-group -->
              <div class="form-group">
                <label class="control-label col-md-4">Password</label>
                <div class="col-md-6">
                  <input type="password" v-model="password" class="form-control" required  />
                </div>
              </div><!-- /.form-group -->
              <div class="form-group">
                <label class="control-label col-md-4">Confirm password</label>
                <div class="col-md-6">
                  <input type="password" v-model="password_confirmation" class="form-control" required  />
                </div>
              </div><!-- /.form-group -->
              <div class="form-group">
                <div class="col-md-8 col-md-offset-4">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                    <router-link class="btn btn-link" to="/">Already have an account</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { register } from '../api'
import swalUtils from '../swalUtils'
export default {
  data() {
    return {
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'password_confirmation': ''
    }
  },
  beforeMount() {
    localStorage.setItem('token', ''); 
    localStorage.setItem('user', '');
  },
  methods: {
    handleRegister() {
      register(this.first_name, this.last_name, this.email, this.password, this.password_confirmation)
        .then(resp => { 
          if(resp.data.access_token) {
            localStorage.setItem('token', resp.data.access_token); 
            localStorage.setItem('user', JSON.stringify(resp.data.user));
            this.$router.push('app');
          }
          console.log('Could not log you in');
        })
        .catch(err => { console.log(err); swalUtils.handleError(err); } );
    }
  }
}
</script>