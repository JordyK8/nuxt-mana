<template>
  <div class="background-overlay bg-inherit">
    <div class="flex flex-wrap">
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
            <a
              class="hover:bg-pink-600 hover:text-white text-xs font-bold uppercase px-5 py-3 block leading-normal text-pink-600"
              :class="{
                'border-b border-b-2 border-pink-600': page.home.openTab === 1,
              }"
              @click="page.toggleTabs(1)"
            >
              For you
            </a>
          </li>
          <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
            <a
              class="hover:bg-pink-600 hover:text-white text-xs font-bold uppercase px-5 py-3 block leading-normal text-pink-600"
              :class="{
                'border-b border-b-2 border-pink-600': page.home.openTab === 2,
              }"
              @click="page.toggleTabs(2)"
            >
              Nearby
            </a>
          </li>
          <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
            <a
              class="hover:bg-pink-600 hover:text-white text-xs font-bold uppercase px-5 py-3 block leading-normal text-pink-600"
              :class="{
                'border-b border-b-2 border-pink-600': page.home.openTab === 3,
              }"
              @click="page.toggleTabs(3)"
            >
              Trending
            </a>
          </li>
        </ul>
        <div
          class="relative flex flex-col min-w-0 break-words bg-inherit w-full mb-6"
        >
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <!-- For You -->
              <div
                class="flex flex-wrap justify-evenly overflow-y-hidden p-2"
                :class="{
                  hidden: page.home.openTab !== 1,
                  block: page.home.openTab === 1,
                }"
              >
                <CompanyCard
                  v-for="item of items"
                  :key="item._id"
                  :item="item"
                  @click="gotoPage(item.name.replaceAll(' ','').toLowerCase(), item.city)"
                />
              </div>
              <!-- Nearby -->
              <div
                class="flex flex-wrap justify-evenly overflow-y-hidden p-2"
                :class="{
                  hidden: page.home.openTab !== 2,
                  block: page.home.openTab === 2,
                }"
              ></div>
              <!-- Trending -->
              <div
                class="flex flex-wrap justify-evenly overflow-y-hidden p-2"
                :class="{
                  hidden: page.home.openTab !== 3,
                  block: page.home.openTab === 3,
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { usePage } from '~/stores/page'
const props = defineProps({
  items: {
    type: Array,
    default: () => {
      return [
        {
          _id: '23dkjhkjd23',
          city: 'Miri',
          image:
            'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          distance: {
            amount: 200,
            type: 'm',
          },
          name: "Sloppy Joe's Dirty Greasy burger palace",
          tags: ['Hallal', 'Burgers', 'Spicy', 'Laksa'],
          shortLocation: 'Dordrecht, Hartmanstraat 1198',
        },
        {
          _id: 'd3dkasdfkjd23',
          image:
            'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          distance: {
            amount: 200,
            type: 'm',
          },
          name: "Sloppy Joe's Dirty Greasy burger palace",
          tags: ['Hallal', 'Burgers', 'Spicy', 'Laksa'],
          shortLocation: 'Dordrecht, Hartmanstraat 1198',
        },
        {
          _id: '32kjh23d',
          image:
            'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          distance: {
            amount: 200,
            type: 'm',
          },
          name: "Sloppy Joe's Dirty Greasy burger palace",
          tags: ['Hallal', 'Burgers', 'Spicy', 'Laksa'],
          shortLocation: 'Dordrecht, Hartmanstraat 1198',
        },
      ]
    },
  },
})

// methods
const gotoPage = (name: string, city: string) => {
  const router = useRouter()
  console.log(name);
  
  router.push(`/${city}/${name}`)
}
const page = usePage()
const router = useRouter()
</script>
