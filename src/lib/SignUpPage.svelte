<script lang=ts>
  import axios from 'axios';

   let disabled = true;
   let username: string;
   let email: string;
   let password1: string;
   let password2: string;

  $: disabled = (password1 && password2) ? password1 !== password2 : true;

  const submit = () => {
    // axios.post('/api/1.0/users', {
    //   username: username,
    //   email: email,
    //   password: password1
    // });
    fetch('/api/1.0/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password: password1
      })
    });
  }

</script>

<form>
  <h1>Sign Up</h1>
  <label for="username">Username</label>
  <input id="username" bind:value={username}/>
  
  <label for="email">Email</label>
  <input id="email" bind:value={email}/>
  
  <label for="password">Password</label>
  <input id="password" type="password" bind:value={password1}/>
  
  <label for="password-repeat">Password Repeat</label> 
  <input id="password-repeat" type="password" bind:value={password2}/>
  
  <button {disabled} on:click|preventDefault={submit}>Sign Up</button>
</form>



<style>

</style>
