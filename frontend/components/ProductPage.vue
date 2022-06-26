<template>
  <div class="grid grid-cols-8 gap-4">
    <div class="col-span-6 p-2 m-2">
      <!--Card 1-->
      <div class="max-w-200 rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-lg mb-2">
            {{ item.name }}
            <IconMdi:cards-heart-outline
              class="float-right text-3xl mr-2 hover:cursor-pointer"
            />
          </div>

          <div>
            <span>{{ item.viewed }}</span>
            <span>{{ item.liked }}</span>
            <span>{{ item.created_at }}</span>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
         <Carousel />
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-bold text-gray-700 mr-2 mb-2"
            >{{ item.price }} RM</span
          >
          <p class="text-gray-700 text-base">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="col-span-2 bg-gray-400 p-2 m-2"></div>
  </div>
</template>
<script lang="ts" setup>
const props: any = defineProps({
  item: {
    type: Object,
    default: () => {
      return {
        _id: '2e3unj23r',
        created_at: '18 jan. `22, 09:55',
        owner: {
          _id: '23r23r32d',
          name: 'John Doe',
          email: 'jd@mail.incomplete',
          active: 10,
          rating: 4,
        },
        viewed: 200,
        liked: 2,
        bids: [
          {
            _id: 'e32d23',
            amount: 150,
            name: 'Joshyn',
            date: '22-10-2021',
          },
        ],
        name: 'Speakerset',
        price: 300,
        description: ` This is the description of the roduct

                It is in top condition.

                No calls please.
                bye!!`,
        details: {
          brand: 'LG',
          model: 'LTX-400',
          age: 3,
        },
      }
    },
  },
})
console.log(props)
</script>
