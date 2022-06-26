<template>
  <BuilderNavbar>
    <template #menu>
      <div class="flex items-center ml-auto">
        <nav
          class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
          role="navigation"
        >
          <ul class="flex items-center space-x-6 lg:space-x-8">
            <li>
              <Anchor
                to="/"
                class="hover:no-underline hover:text-slate-900 hover:dark:text-white flex"
                ><IconMdi:message-text-outline class="mt-0.5 text-lg" />
                <span class="hidden lg:flex ml-2">Messages</span></Anchor
              >
            </li>
            <li>
              <Anchor
                to="/"
                class="hover:no-underline hover:text-slate-900 hover:dark:text-white flex"
                ><IconMdi:bell-outline class="mt-0.5 text-lg" />
                <span class="hidden lg:flex ml-2">Notices</span></Anchor
              >
            </li>
            <li>
              <Anchor
                to="/"
                class="hover:no-underline hover:text-slate-900 hover:dark:text-white flex"
                ><IconMdi:account-outline class="mt-0.5 text-lg" />
                <span class="hidden lg:flex ml-1">Login</span></Anchor
              >
            </li>
            <li>
              <Button type="primary" title="NewAdd" @click="toNewAdd()">
                <IconMdi:keep-outline class="text-lg" />
                <span class="hidden lg:flex ml-2">New Add</span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </template>
  </BuilderNavbar>
</template>

<script lang="ts" setup>
import { IApp } from '~/utils/app'

export interface IMenuItem {
  type: 'link' | 'button'
  icon: string
  text: string
  href?: any
  route?: any
}

const { t } = useLang()
const app = useState<IApp>('app')

const toNewAdd = () => {
  const router = useRouter()
  console.log('clicked')

  router.push('/')
}
</script>
