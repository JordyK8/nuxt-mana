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
                <AddCard
                  v-for="(item, i) in [
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                  ]"
                  :key="i"
                  @click="router.push(item.path)"
                />
              </div>
              <!-- Nearby -->
              <div
                class="flex flex-wrap justify-evenly overflow-y-hidden p-2"
                :class="{
                  hidden: page.home.openTab !== 2,
                  block: page.home.openTab === 2,
                }"
              >
                <AddCard
                  v-for="(item, i) in [
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                  ]"
                  :key="i"
                  @click="router.push(item.path)"
                />
              </div>
              <!-- Trending -->
              <div
                class="flex flex-wrap justify-evenly overflow-y-hidden p-2"
                :class="{
                  hidden: page.home.openTab !== 3,
                  block: page.home.openTab === 3,
                }"
              >
                <AddCard
                  v-for="(item, i) in [
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                    {
                      path: '/category/sub-category/another-sub-category/hu9uihiubu7ig',
                    },
                  ]"
                  :key="i"
                  @click="router.push(item.path)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { usePage } from '~/stores/page'

const page = usePage()
const router = useRouter()
</script>
