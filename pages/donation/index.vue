<template>
  <div class="row">
      
       <div class="col-md-12">
           <br><br><br><br>
           <div style=" margin: auto; width: 60%; padding: 10px;" class="card card-primary card-outline">
                <div class="card-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Amount to Donate</label>
                        <input v-model="amount" type="number" class="form-control" id="exampleInputEmail1" placeholder="Amount">
                    </div>
                </div>
                    <div class="card-footer">
                        <button @click="donate" class="btn btn-primary btn-block">Submit</button>
                    </div>
            </div>
       </div>
  </div>
</template>

<script>
export default {
    layout: 'customer',
    data(){
        return{
            amount:0
        }
    },
    methods:{
        donate(){
            console.log('clicked')
            if(this.amount === 0){
                toastr.error('Invalid Amount')
            }else{
                this.$axios.post('http://127.0.0.1:8000/api/donatePayment',{
                    amount: this.amount
                }).then((res)=>{
                    console.log(res.data)
                    // window.location.href(res.data)
                    window.location.href = res.data
                }).catch((err)=>{
                    toastr.error('Invalid Amount')
                })
            }
        }
    },
    created(){
        console.log('asdasd');
    }
}
</script>

<style>

</style>