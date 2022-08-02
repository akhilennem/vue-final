<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row align="center" justify="center" dense>
                    <v-col cols="12" sm="8" md="4" lg="4">
                        <v-card elevation="0">
                            <div class="text-center">
                                <br>
                                <h1 class="mb-2">Enter New Password</h1>
                            </div>
                            <a href="#">
                                <v-img src="https://thumbs.dreamstime.com/b/account-login-password-key-computer-man-near-vector-male-character-design-concept-landing-page-web-poster-banner-184009994.jpg" ></v-img>
                            </a>
                        <v-form @submit.prevent="enterPassword">
                            <v-text-field
                                v-model="email"
                                label="Email"
                                type="email"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                                class="mt-12"
                                prepend-inner-icon="email"
                          />
                            <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            prepend-inner-icon="mdi-lock-outline"
                            :type="passwordShow ? 'text' : 'password'"
                            :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="passwordShow = !passwordShow"
                          />
                          <v-text-field
                            v-model="password_confirm"
                            :rules="passwordRules"
                            label="Confirm Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            prepend-inner-icon="mdi-lock-outline"
                            :type="passwordShow ? 'text' : 'password'"
                            @click:append="passwordShow = !passwordShow"
                          />
                          <v-btn type="submit" class="rounded-0" color="blue" x-large>Submit</v-btn>
                        </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            email: '',
            passwordShow: false,
            valid: true,
            password: '',
            password_confirm: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'Password must be more than 8 characters',
            ],
        }
    },
    methods: {
         enterPassword() {
             axios.get('https://my--1.herokuapp.com/api/mail/reset-password',{
                params:{
                "newpassword": this.password,
                "email": this.email}
            }).then((response)=>{
                console.log(response.status);
                console.log(response.data);
                this.$router.push({name: 'admin'})
              }).catch((error)=>{
                console.log(error.response);
              }); 

            
        }
    },
    
}
</script>

<style lang="css" scoped>

</style>