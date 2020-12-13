<template>
   <div class="row">
      <div class="col-md-12">
         <br><br><br>
         <div style=" margin: auto; width: 60%; padding: 10px;" class="card card-primary card-outline">
            <div class="card-body">
               <div class="form-group">
                  <h4>Thank you for your generosity. Your cash donation helped us achieve our fundraising goal.</h4>
               </div>
            </div>
            <div class="card-footer">
               <button @click="gotoHome" class="btn btn-primary btn-block">Back to home</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
    layout:'customer',
    methods:{
      gotoHome(){
        console.log('Home')
        document.location.href="/";
      }
    }
}
</script>

<style>

</style>