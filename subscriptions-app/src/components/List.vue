<template> 
    <div> 
    <div class="List"> 
      <div class="row justify-content-center"> 
          <div class="col-md-8"> 
              <h3 class="text-center">Subscriptions</h3> 
                <table class="table align-middle"> 
                  <thead> 
                      <tr> 
                          <th>Name</th> 
                          <th class="d-none d-sm-table-cell">Description</th> 
                          <th>Amount</th> 
                          <th>Frequency</th>
                          <th>Actions</th> 
                      </tr> 
                  </thead> 
                  <tbody> 
                      <tr v-for="subscription in Subscriptions" :key="subscription.key"> 
                          <td>{{ subscription.name }}</td> 
                          <td class="d-none d-sm-table-cell">{{ subscription.description }}</td> 
                          <td>${{ subscription.amount }}</td> 
                          <td>{{ subscription.frequency }}</td>
                          <td> 
                              <router-link :to="{name: 'Edit', params: { id: subscription.key }}" class="btn btn-primary btn-                                sm px-3"> 
                                Edit 
                              </router-link>
                              <button @click.prevent="deleteSubscription(subscription.key)" class="btn btn-danger btn-                                  sm px-3"> 
                                Delete 
                              </button> 
                          </td> 
                      </tr> 
                  </tbody> 
              </table> 
          </div> 
      </div> 
    </div> 
    </div> 
  </template> 
  
  <script> 
  import db from '../firebaseDb' 
  
  export default { 
    data() { 
      return { 
        Subscriptions: [], 
        } 
    }, 
    created () { 
        db.collection('subscriptions').onSnapshot((snapshotChange) => { 
          this.Subscriptions = [] 
          snapshotChange.forEach((doc) => { 
            this.Subscriptions.push({ 
              key: doc.id, 
              name: doc.data().name, 
              description: doc.data().description, 
              amount: doc.data().amount, 
              frequency: doc.data().frequency 
            }) 
          }) 
      }) 
    }, 
    methods: { 
      deleteSubscription(id) { 
        if (window.confirm('Do you really want to delete?')) { 
          db.collection('subscriptions').doc(id).delete().then(() => { 
            console.log('Document deleted!') 
          }) 
              .catch((error) => { 
                console.error(error) 
              }) 
        } 
      } 
    } 
  } 
  </script> 
  
  <style> 
  .table thead { 
    background-color: #42B883; 
    color: #2C3D4E; 
  } 
  
  .table td,.table th { 
    padding: 12px 15px; 
    border-bottom: 1px solid #ddd; 
    text-align:center; 
  } 
  
  .btn { 
    padding-top: 2px; 
    padding-bottom: 2px; 
    padding-right: 5px; 
    padding-left: 5px; 
    margin: 2px; 
  } 
  </style>
  
