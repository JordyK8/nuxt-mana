<template>
  <div class="flex justify-center items-center border-t-2 border-b-2">
    <ul class="flex items-center">
      <li class="p-4 uppercase md:text-sm text-xs">
        <Anchor @click.prevent="page.toggleContainer()">
          <span class="txt">Categories</span>
          <IconMdi:expand-more class="inline-flex md:text-sm text-xs" />
        </Anchor>
      </li>
      <li class="p-4 border-l-2 uppercase md:text-sm text-xs txt">Something</li>
      <li class="p-4 border-l-2 uppercase md:text-sm text-xs txt">Something</li>
    </ul>
  </div>
  <div
    v-if="page.containerOpen"
    class="border border-2 shadow-md h-100 w-screen flex flex-col flex-wrap p-8"
  >
    <Anchor v-for="(item, i) in page.categoriesState" :key="i" class="p-1">
      <IconMdi:car class="inline-flex text-md mr-2" />
      <span>{{ item.name }}</span>
    </Anchor>
  </div>
  <PageWrapper class="justify-center bg-gray-200">
    <HomeTabs />
  </PageWrapper>
</template>

<script lang="ts" setup>
import { usePage } from '~/stores/page'

definePageMeta({
  layout: 'page',
})
const page = usePage()

page.getCategories()
</script>

<style lang="scss">
@media only screen and (max-width: 600px) {
  .txt {
    font-size: xx-small;
  }
}
.linear-wipe-text {
  $color1: theme('colors.blue.500');
  $color2: theme('colors.purple.500');
  background: linear-gradient(
    to right,
    $color1 20%,
    $color2 40%,
    $color2 60%,
    $color1 80%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 20s ease infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
</style>
