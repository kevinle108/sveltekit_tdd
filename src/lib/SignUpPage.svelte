<script lang=ts>
   let disabled = true;
   let password1: string;
   let password2: string;

  $: disabled = (password1 && password2) ? password1 !== password2 : true;

</script>

<h1>Sign Up</h1>
<label for="username">Username</label>
<input id="username"/>

<label for="email">Email</label>
<input id="email"/>

<label for="password">Password</label>
<input id="password" type="password" bind:value={password1}/>

<label for="password-repeat">Password Repeat</label>
<input id="password-repeat" type="password" bind:value={password2}/>

<button {disabled}>Sign Up</button>

<style>

</style>
