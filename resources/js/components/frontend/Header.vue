<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
	   <div class="container">
	  <router-link class="navbar-brand" :to="{name:'Home'}">Site Logo</router-link>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav ml-auto">
	      <li class="nav-item active">
	        <router-link  :to="{name:'Home'}" class="nav-link">Home</router-link>
	      </li>
	      <li class="nav-item active">
	        <router-link  :to="{name:'category-list'}" class="nav-link">Product Category</router-link>
	      </li>
	    </ul>
	  </div>
  </div>
</nav>

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
