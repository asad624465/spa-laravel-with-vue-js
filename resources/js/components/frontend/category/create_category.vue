<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex align-item-center justify-content-between">
                    	<h5 class="mb-0">Create Category</h5>
                    	<router-link :to="{name:'category-list'}" class="btn btn-primary btn-sm">Category list</router-link>
                    </div>

                    <div class="card-body">
                      	<div class="row">
                      		<div class="col-6 offset-3">
                      			<form @submit.prevent="createCategory">
                      				<div class="form-group">
										<label  for="">Category name</label>
										<input v-model="categoryForm.name" placeholder="Category name" type="text" class="form-control" name="name" :class="{ 'is-invalid': categoryForm.errors.has('name') }">
      									<has-error :form="categoryForm" field="name"></has-error>
                      				</div>
                      				<div class="form-group">
                      					<label  for="">Description</label>
                      					<textarea placeholder="Description" type="text" class="form-control" v-model="categoryForm.description" name="description" :class="{ 'is-invalid': categoryForm.errors.has('description') }"></textarea>

                      					<has-error :form="categoryForm" field="description"></has-error>
                      				</div>
                      				<div class="form-group">
										<button type="submit" class="btn btn-success">Create Category</button>
                      				</div>
                      			</form>
                      		</div>
                      	</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form } from 'vform'


    export default {
        data(){
        	return {
        		categoryForm: new Form({
		        name: '',
		        description: '',
		      }),
        	}
        },
        methods: {
        	createCategory(){
        		this.categoryForm.post('/api/category')
	        		.then(({ data }) => { 
	        			this.categoryForm.name='';
	        			this.categoryForm.description='';
	        		})
	    		}
        	}
     
    }
</script>

