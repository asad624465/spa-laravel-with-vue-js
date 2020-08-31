<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex align-item-center justify-content-between">
                    	<h5 class="mb-0">Product category list</h5>
                    	<a class="btn btn-primary btn-sm">Add new category</a>
                    </div>

                    <div class="card-body">
                      	<table class="table">
                      		<thead>
                      			<tr>
                      				<td>ID</td>
                      				<td>Name</td>
                      				<td>Slug</td>
                      				<td>Descriptio</td>
                      				<td>Action </td>
                      			</tr>
                      		</thead>
                      		<thead>
                      			<tr>
                      				<td>ID</td>
                      				<td>Name</td>
                      				<td>Slug</td>
                      				<td>Descriptio</td>
                      				<td>
                      				<a href="#" class="btn btn-primary btn-sn">Edit</a>
                      				<a href="#" class="btn btn-danger btn-sn">Delete</a>
                      				 </td>
                      			</tr>
                      		</thead>
                      	</table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
