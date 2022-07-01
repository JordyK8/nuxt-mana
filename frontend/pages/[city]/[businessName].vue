<template>
  <PageWrapper class="px-0 mx-0">
    <PageHeader>
      <PageTitle :text="client.businessName" class="uppercase" />
    </PageHeader>
    <PageBody>
      <PageSection class="px-0 mx-0">
        <div class="w-full">
          <img
            class="w-full"
            src="https://webthemez.com/wp-content/uploads/2017/02/Kitchen-Restaurant-Bootstrap-4-Website-Template.jpg"
            alt=""
          />
        </div>
        <Menu />
        <br /><br />
        <div>
          <h2>Rating</h2>
          <span
            >Stars: {{ client.rating.stars }} - Ranked:
            {{ client.rating.ranking.place }} in area:
            {{ client.rating.ranking.location }} within radis of
            {{ client.rating.ranking.radius }}
            {{ client.rating.ranking.radiusType }}</span
          >
          <div v-for="review of client.rating.reviews" class="mb-5">
            <div
              class="h-6 relative bg-green-600 rounded-full px-2 py-1 text-xs font-semibold text-white ml-10 inline-flex"
            >
              3.1<IconMdi:star class="text-xs align-top" />
            </div>
            <span class="ml-2"> {{ review.date }}</span>
            <p class="ml-10">{{ review.content }}</p>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'client',
})

// lifecycle
onMounted(() => {
  const router = useRouter()
  console.log(router.currentRoute.value.params)
  
})

const props = defineProps({
  client: {
    type: Object,
    default: () => {
      return {
        _id: '2e3unj23r',
        businessName: 'Lee Kon Laksa',
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
        rating: {
          ranking: {
            place: 100,
            location: 'Lutong Baru, Jalan Topsi, Lot 2250',
            radius: 25,
            radiusType: 'km',
          },
          stars: 4,
          reviews: [
            {
              stars: 3,
              date: new Date().toDateString(),
              name: 'Josh',
              link: '/revies/josh88',
              content:
                'Great place but I think the service could use a boost. Food was great though.',
              order: { food: ['Asam Laksa'], drink: ['Teh Tarik'] },
            },
            {
              stars: 4,
              date: new Date().toDateString(),
              name: 'Janine',
              link: '/revies/janineS8',
              content: 'Best Laksa of the country',
              order: { food: ['Asam Laksa'], beverages: ['Teh Tarik'] },
            },
            {
              stars: 5,
              date: new Date().toDateString(),
              name: 'Moe',
              link: '/revies/moegeTe',
              content:
                'I have not found any better Laksa like this before lah.',
              order: { food: ['Kuching Laksa'], beverages: [] },
            },
          ],
        },
        tags: ['Hallal', 'Burgers', 'Spicy', 'Laksa'],
      }
    },
  },
})
</script>
