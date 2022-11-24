<template>

  

      <!--<div>
        <div class="text-center">
          <div class="py-4" v-for="produit in produits" :key="produit.id" >
            <p>{{produit.name}}</p>
            <div>{{produit.creator}}</div>
            <img :src="produit.image" alt="image">
          </div>
          </div>
      </div>  -->
  <p class="py-5 text-center text-xl"> Différentes cryptomonnaies ci dessous : </p>       
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Produits</h2>

      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="produit in produits" :key="produit.id" :href="produit.href" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="produit.image" :alt="produit.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ produit.name }}</h3>
          <h4 class="text-sm text-gray-700">{{ produit.creator }}</h4>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ produit.price }} {{produit.about}}</p>
        </a>
      </div>
    </div>
  </div>  


  

</template>



 <script>

/* const products = [
  {
    id: 1,
    name: 'Bitcoin',
    creator: 'Satoshi Nakamoto',
    href: '#',
    price: '1 BTC ≃ 16000 euros',
    imageSrc: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023',
    imageAlt: 'photo bitcoin',
  },
  {
    id: 2,
    name: 'Ethereum',
    creator: 'Vitalik Buterin',
    href: '#',
    price: '1 ETH ≃ 1200 euros',
    imageSrc: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023',
    imageAlt: 'photo ethereum',
  },
  {
    id: 3,
    name: 'Cardano',
    creator: 'Charles Hoskinson',
    href: '#',
    price: '1 ADA ≃ 0,30 euros',
    imageSrc: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=023',
    imageAlt: 'photo cardano',
  },
  {
    id: 4,
    name: 'Solana',
    creator: 'Anatoly Yakovenko',
    href: '#',
    price: '1 SOL ≃ 13 euros',
    imageSrc: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=023',
    imageAlt: 'photo solana',
  },
  {
    id: 5,
    name: 'XRP',
    creator: 'Ripple',
    href: '#',
    price: '1 XRP ≃ 0,30 euros',
    imageSrc: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=023',
    imageAlt: 'photo xrp',
  },
  {
    id: 6,
    name:'BNB',
    creator: 'Binance',
    href: '#',
    price: '1 BNB ≃ 280 euros',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png',
    imageAlt: 'photo bnb',
  },
  {
    id: 7,
    name: 'Dogecoin',
    creator: 'Elon Musk',
    href: '#',
    price: '1 DOGE ≃ 0,05 euros',
    imageSrc: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=023',
    imageAlt: 'photo dogecoin',
  },
  {
    id: 8,
    name: 'Polkadot',
    creator: 'Gavin Wood',
    href: '#',
    price: '1 DOT ≃ 5 euros',
    imageSrc: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=023',
    imageAlt: 'photo polkadot',
  }
 ]  */


import axios from 'axios'

export default {
  
  data() {
      return {
      produits: [],
      error: []
    }
  },
  created() {
    axios
      .get(`http://localhost:8081/produit.json`)
      .then(response => {this.produits= response.data.produits})
      .catch(e => {this.errors.push(e)})
   }  
}
</script>
 



   
    
 



      