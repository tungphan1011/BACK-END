<!-- javascrip  -->
<script>
    import axios from 'axios'
  import { onMount } from 'svelte';
    function getBooks(){
        axios.get('http://localhost:3000/books').then(res=>{
            console.log(res.data)
        }
    )}
    onMount(()=>{
        getBooks()
    })
</script>
<!-- html -->
<h1>Welcome to my website</h1>

<!-- CSS -->
<style></style>