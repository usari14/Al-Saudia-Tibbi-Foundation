<template>
    <div class="signup-container">
      <h1>Signup Page</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="name" id="username" />
          <span class="error" v-if="errors.name">{{ errors.name }}</span>
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" />
          <span class="error" v-if="errors.email">{{ errors.email }}</span>
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" />
          <span class="error" v-if="errors.password">{{ errors.password }}</span>
        </div>
  
        <button type="submit">Sign Up</button>
      </form>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Make sure axios is installed and imported
  
  export default {
    name: 'Signup',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        errors: {},
        successMessage: '',
      };
    },
    methods: {
      async handleSubmit() {
        this.errors = {}; // Reset errors
        this.successMessage = ''; // Reset success message
  
        // Validation checks
        if (!this.name) {
          this.errors.name = 'Username is required.';
        }
  
        if (!this.email) {
          this.errors.email = 'Email is required.';
        } else if (!this.validEmail(this.email)) {
          this.errors.email = 'Please enter a valid email address.';
        }
  
        if (!this.password) {
          this.errors.password = 'Password is required.';
        } else if (this.password.length < 6) {
          this.errors.password = 'Password must be at least 6 characters.';
        }
  
        // If no errors, submit the form data to the backend
        if (Object.keys(this.errors).length === 0) {
          try {
            const response = await axios.post('http://localhost:8080/api/signup', {
                name: this.name,
              email: this.email,
              password: this.password,
            });
  
            if (response.status === 201) {
              this.successMessage = 'Signup successful!';
              // Reset form fields
              this.name = '';
              this.email = '';
              this.password = '';
            }
          } catch (error) {
            console.error('Error during signup:', error);
            this.errors.general = error.response?.data?.message || 'Signup failed. Please try again.';
          }
        }
      },
      validEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 0.7rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
    font-size: 0.9rem;
  }
  
  .success {
    color: green;
    font-size: 1rem;
    margin-top: 1rem;
  }
  </style>
  