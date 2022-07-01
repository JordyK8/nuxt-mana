<template>
  <div>
    MENU
    <h2>FOOD</h2>
    <div v-for="category of client.menu.food">
      <h3>{{ category.name }}</h3>
      <div v-for="item of category.items" class="ml-4">
        <span>{{ item.name }}: </span>
        <span v-for="price of item.prices">
          {{ price.name }}: {{ price.amount }} {{ price.currency }},
        </span>
      </div>
    </div>
    <h2>DRINKS</h2>
    <div v-for="category of client.menu.beverages">
      <h3>{{ category.name }}</h3>
      <div v-for="item of category.items" class="ml-4">
        <span>{{ item.name }}: </span>
        <span v-for="price of item.prices">
          {{ price.name }}: {{ price.amount }} {{ price.currency }},
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'client',
})
const props = defineProps({
  client: {
    type: Object,
    default: () => {
      return {
        menu: {
          food: [
            {
              name: 'main',
              items: [
                {
                  name: 'Signapore Laksa',
                  tags: ['glutenFree', 'halal', 'laksa'],
                  prices: [
                    { name: 'regular', amount: 12, currency: 'RM' },
                    { name: 'large', amount: 16, currency: 'RM' },
                  ],
                },
                {
                  name: 'Kuching Laksa',
                  tags: ['glutenFree', 'halal', 'laksa'],
                  prices: [
                    { name: 'regular', amount: 10, currency: 'RM' },
                    { name: 'large', amount: 14, currency: 'RM' },
                  ],
                },
                {
                  name: 'Asam Laksa',
                  tags: ['glutenFree', 'laksa', 'spicy'],
                  prices: [
                    { name: 'regular', amount: 15, currency: 'RM' },
                    { name: 'large', amount: 19, currency: 'RM' },
                  ],
                },
              ],
            },
            {
              name: 'sides',
              items: [
                {
                  name: 'Fries',
                  tags: ['glutenFree', 'halal', 'fried'],
                  prices: [
                    { name: 'regular', amount: 8, currency: 'RM' },
                    { name: 'large', amount: 10, currency: 'RM' },
                  ],
                },
                {
                  name: 'Salad',
                  tags: ['glutenFree', 'halal', 'laksa'],
                  prices: [
                    { name: 'regular', amount: 3, currency: 'RM' },
                    { name: 'large', amount: 5, currency: 'RM' },
                  ],
                },
              ],
            },
          ],
          beverages: [
            {
              name: 'alcohol',
              items: [
                {
                  name: 'Heineken',
                  tags: ['beer', 'alcohol'],
                  prices: [
                    { name: 'glass', amount: 5, currency: 'RM' },
                    { name: 'bottle 33cl', amount: 8, currency: 'RM' },
                    { name: 'bottle 50cl', amount: 12, currency: 'RM' },
                  ],
                },
                {
                  name: 'CarlsBerg',
                  tags: ['beer', 'alcohol'],
                  prices: [
                    { name: 'glass', amount: 5, currency: 'RM' },
                    { name: 'bottle 33cl', amount: 8, currency: 'RM' },
                    { name: 'bottle 50cl', amount: 12, currency: 'RM' },
                  ],
                },
              ],
            },
            {
              name: 'Tea',
              items: [
                {
                  name: 'Teh Tarik',
                  tags: ['sweet', 'halal'],
                  prices: [
                    { name: 'glass', amount: 5, currency: 'RM' },
                    { name: 'bottle 33cl', amount: 8, currency: 'RM' },
                    { name: 'bottle 50cl', amount: 12, currency: 'RM' },
                  ],
                },
                {
                  name: 'Three Layer Milktea',
                  tags: ['sweet', 'miltea'],
                  prices: [
                    { name: 'glass', amount: 5, currency: 'RM' },
                    { name: 'bottle 33cl', amount: 8, currency: 'RM' },
                    { name: 'bottle 50cl', amount: 12, currency: 'RM' },
                  ],
                },
              ],
            },
          ],
        },
      }
    },
  },
})
</script>
