<template>


   <!-- <div>
    <div class="justify-center pr-5">
      <div class="text-center">
        <div v-for="(produit, index) in produit" :key="index" :id="produit.id" :name="produit.name" :creator="produit.creator" :image="produit.image " >
        </div>
      </div>
    </div>
    </div>  -->
  
    <!-- <p class="py-5 text-center text-xl"> Différentes cryptomonnaies ci dessous : Voici le cours en temps réel du bitcoin et de l'ethereum.</p>
  <div  class="">vvvvvgv
    <div id="app">
      <div class="justify-center pr-5">
        <div class="text-center">
          <div class="py-4" v-for="produit in produits" >
            <p class="border-violet-600 border-4">
              {{produit.name}} 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> -->

 <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
        </a>
      </div>
    </div>
  </div> 


  

</template>



 <script setup>
const products = [
  {
    id: 1,
    name: 'Bitcoin',
    href: '#',
    price: '1 BTC ≃ 16000 euros',
    imageSrc: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023',
    imageAlt: 'photo bitcoin',
  },
  {
    id: 2,
    name: 'Ethereum',
    href: '#',
    price: '1 ETH ≃ 1200 euros',
    imageSrc: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023',
    imageAlt: 'photo ethereum',
  },
  {
    id: 3,
    name: 'Cardano',
    href: '#',
    price: '1 ADA ≃ 0,30 euros',
    imageSrc: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=023',
    imageAlt: 'photo cardano',
  },
  {
    id: 4,
    name: 'Solana',
    href: '#',
    price: '1 SOL ≃ 13 euros',
    imageSrc: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=023',
    imageAlt: 'photo solana',
  },
  {
    id: 5,
    name: 'XRP',
    href: '#',
    price: '1 XRP ≃ 0,30 euros',
    imageSrc: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=023',
    imageAlt: 'photo xrp',
  },
  {
    id: 6,
    name:'BNB',
    href: '#',
    price: '1 BNB ≃ 280 euros',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png',
    imageAlt: 'photo bnb',
  },
  {
    id: 7,
    name: 'Dogecoin',
    href: '#',
    price: '1 DOGE ≃ 0,05 euros',
    imageSrc: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=023',
    imageAlt: 'photo dogecoin',
  },
  {
    id: 8,
    name: 'Polkadot',
    href: '#',
    price: '1 DOT ≃ 5 euros',
    imageSrc: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=023',
    imageAlt: 'photo polkadot',
  }
]


/* import axios from 'axios'

export default {
  props: {
    id : Number,
    image: string,
    name: string,
    creator: string,
  },
  
  data() {
    
    return {
      produits: []
    }
  },
  created() {
    axios
      .get('http://localhost:8080/produit.json')
      .then(response => {this.produits= response.data.produits})
      .catch(e => {this.errors.push(e)})
   }  
} */
</script>
 



   
    
 



      