<template>
<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">Login</div>
        <div class="panel-body">
          <form class="form-horizontal" @submit.prevent="login">
            <div class="form-group" :class="{ 'has-error': error }">
              <label for="email" class="col-md-4 control-label">E-Mail Address</label>
              <div class="col-md-6">
                <input v-model="email" id="email" type="email" class="form-control" name="email" required autofocus>
              </div>
            </div>
            <div class="form-group" :class="{ 'has-error': error }">
              <label for="password" class="col-md-4 control-label">Password</label>
              <div class="col-md-6">
                <input v-model="password" id="password" type="password" class="form-control" name="password" required>
                <span v-show="error" class="help-block">
                  <strong>{{ error }}</strong>
                </span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-8 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                  Login
                </button>
                <a class="btn btn-link" href="#">
                  Forgot Your Password?
                </a>
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
import * as api from '../api'
import swalUtils from '../swalUtils'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    login() {
      utils.spinner();
      api.login(this.email, this.password)
        .then(resp => { 
          if(resp.data.access_token) {
            localStorage.setItem('token', resp.data.access_token);  
            // redirect
          }
          
        })
        .catch(err => { console.log(err); swalUtils.handleError(err); } );    }
  },
}
</script>