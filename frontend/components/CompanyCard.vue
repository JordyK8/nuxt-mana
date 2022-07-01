<template>
  <!--Card 1-->
  <div class="max-w-80 rounded overflow-hidden shadow-lg bg-white m-4">
    <img class="w-full" :src="item.image" alt="Mountain" />
    <span
      class="absolute bg-black rounded-full px-3 py-1 text-xs font-semibold text-white ml-3"
      style="margin-top: -35px"
      >{{ item.distance.amount }}{{ item.distance.type }}</span
    >
    <div class="px-4 py-2">
      <div class="font-bold text-lg mb-2 flex flex-row">
        <div class="basis-3/4">{{ item.name }}</div>
        <div
          class="h-6 relative bg-green-600 rounded-full px-2 py-1 text-xs font-semibold text-white ml-10 inline-flex"
        >
          3.1<IconMdi:star class="text-xs align-top" />
        </div>
      </div>
      <span v-for="(tag, i) of item.tags" :key="i"
        >{{ tag }}{{ i === item.tags.length - 1 ? '' : ', ' }}
      </span>
    </div>
    <div class="inline-flex px-6 pt-4 pb-2">
      <span class="px-3 py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">{{
        item.shortLocation
      }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
// micro compiler
const props = defineProps({
  item: {
    type: Object,
    default: () => {
      return {
        image:
          'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        distance: {
          amount: 200,
          type: 'm',
        },
        name: "Sloppy Joe's Dirty Greasy burger palace",
        tags: ['Hallal', 'Burgers', 'Spicy', 'Laksa'],
        shortLocation: 'Dordrecht, Hartmanstraat 1198',
      }
    },
  },
})
</script>
