<template>
  <div class="container mx-auto flex h-screen w-full">
    <div class="lg:w-1/4 hidden md:flex flex-col justify-between px-4 py-1 border-r border-gray-2">
      <div class="flex-1 flex flex-col items-center lg:items-start">
        <a href="" class="flex items-center justify-center h-12 w-12 rounded-full text-3xl text-blue-primary hover:bg-blue-light">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <div class="flex flex-col my-2">
          <a v-for="tab in tabs" :key="tab.id" href="" class="flex items-center mr-auto p-2 rounded-full hover:text-blue-primary hover:bg-blue-light">
            <span class="flex items-center justify-center h-8 w-8">
              <font-awesome-icon :icon="tab.icon" class="text-2xl" />
            </span>
            <span class="hidden lg:inline-block text-xl font-semibold mx-4">{{ tab.title }}</span>
          </a>
          <button class="flex items-center mr-auto p-2 rounded-full hover:text-blue-primary hover:bg-blue-light focus:outline-none">
            <span class="flex items-center justify-center h-8 w-8">
              <font-awesome-icon :icon="[ 'fas', 'ellipsis-h']" class="text-2xl" />
            </span>
            <span class="hidden lg:inline-block text-xl font-semibold mx-4">More</span>
          </button>
        </div>
        <button class="w-12 lg:w-11/12 bg-blue-primary rounded-full text-white font-semibold hover:bg-blue-dark focus:outline-none" @click="toggleModalState">
          <span class="flex items-center justify-center h-12 w-12 lg:hidden">
            <font-awesome-icon :icon="[ 'fas', 'ellipsis-h']" class="text-2xl" />
          </span>
          <span class="hidden lg:inline-block p-3">Tweet</span>
        </button>
        <teleport to="#modal-wrapper">
          <div v-if="modalOpen" class="fixed inset-0 z-40 bg-black bg-opacity-30 flex items-start justify-center">
            <div class="w-5/12 mt-10 bg-white rounded-2xl shadow-lg z-50">
              <div class="border-b border-gray-2 px-3  py-2">
                <button class="flex items-center justify-center h-10 w-10 rounded-full text-2xl text-blue-primary hover:bg-blue-light focus:outline-none" @click="toggleModalState">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              <div class="flex p-2">
                <div class="w-14 h-14 mx-2 bg-gray-2 rounded-full flex-none"></div>
                <div class="w-full px-2">
                  <textarea class="w-full focus:outline-none text-lg mt-2 resize-y" placeholder="What is happening now?"></textarea>
                  <div class="border-b border-gray-2 py-2">
                    <button class="flex items-center justify-start p-1.5 rounded-full text-blue-primary hover:bg-blue-light focus:outline-none">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span class="text-sm font-semibold leading-tight ml-1">Everyone can reply</span>
                    </button>
                  </div>
                  <div class="flex items-center mt-2">
                    <button class="flex items-center justify-center h-10 w-10 rounded-full text-2xl text-blue-primary hover:bg-blue-light focus:outline-none">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </button>
                    <button class="flex items-center justify-center h-10 w-10 rounded-full text-2xl text-blue-primary hover:bg-blue-light focus:outline-none">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg>
                    </button>
                    <button class="flex items-center justify-center h-10 w-10 rounded-full text-2xl text-blue-primary hover:bg-blue-light focus:outline-none">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </button>
                    <button class="flex items-center justify-center h-10 w-10 rounded-full text-2xl text-blue-primary hover:bg-blue-light focus:outline-none">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </button>
                    <button class="flex items-center justify-center h-10 w-10 rounded-full text-2xl text-blue-primary hover:bg-blue-light focus:outline-none">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </button>
                    <button class="ml-auto bg-blue-primary px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-dark focus:outline-none">Tweet</button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </teleport>
      </div>
      <div class="relative">
        <div v-show="openDropdown" class="fixed inset-0 z-40" @click="openDropdown = false"></div>
        <transition
          enter-active-class="transition ease-out duration-150"
          enter-from-class="transform opacity-0 scale-90"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-100"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-90"
        >
          <div v-show="openDropdown" class="absolute bottom-0 left-0 z-50 w-72 mb-20 py-3 bg-white rounded-2xl shadow-md border border-gray-2">
            <div class="flex items-center justify-between w-full px-4 pb-3 pt-2">
              <div class="flex items-center">
                <span class="w-12 h-12 rounded-full bg-gray-3">x</span>
                <div class="ml-4 text-left">
                  <p class="font-semibold leading-tight">fajar</p>
                  <p class="text-gray-4 leading-tight">@fajarafriansh</p>
                </div>
              </div>
              <svg class="w-6 h-6 text-blue-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <button class="w-full p-4 border-t border-gray-2 text-left text-dark hover:bg-gray-1 leading-tight">Add existing account</button>
            <button class="w-full p-4 border-t border-gray-2 text-left text-dark hover:bg-gray-1 leading-tight">Logout from @fajarafriansh</button>
          </div>
        </transition>
        <button class="flex items-center justify-between w-14 h-14 lg:w-full lg:h-auto mb-2 p-2 lg:p-3 rounded-full hover:bg-blue-light focus:outline-none" @click="openDropdown = !openDropdown">
          <div class="flex items-center">
            <span class="w-10 h-10 rounded-full bg-gray-3">x</span>
            <div class="ml-4 text-left hidden lg:inline-block">
              <p class="font-semibold leading-tight">fajar</p>
              <p class="text-gray-4 leading-tight">@fajarafriansh</p>
            </div>
          </div>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
      </div>
    </div>
    <div class="w-full md:w-1/2 flex flex-col">
      <div class="w-full flex-none bg-gray-500 p-2">
        <button class="md:hidden text-3xl p-4" @click="open = true">X</button>
        Home
      </div>
      <div class="flex-1 overflow-y-auto">Tweet</div>
      <div class="w-full flex-none bg-gray-500 md:hidden">Bottom</div>
    </div>
    <div class="w-1/3 bg-red-400 hidden md:block overflow-y-auto">
      Trending <font-awesome-icon :icon="['fab', 'twitter']" />
    </div>
  </div>
  <div v-show="open" class="fixed inset-0 z-40" @click="open = false"></div>
  <transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="transform opacity-0 -translate-x-60"
    enter-to-class="transform opacity-100 translate-x-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="transform opacity-100 translate-x-0"
    leave-to-class="transform opacity-0 -translate-x-60"
  >
    <div v-show="open" class="w-3/4 fixed inset-0 bg-indigo-500 z-50">Mobile menu</div>
  </transition>
</template>

<script>
import { ref } from "vue"

export default {
  name: 'App',
  setup() {
    const modalOpen = ref(false)
    const toggleModalState = () => {
      modalOpen.value = !modalOpen.value;
    };

    return {
      modalOpen,
      toggleModalState
    }
  },
  data: () => ({
    tabs: [
      {
        id: 'home',
        title: 'Home',
        icon: ['fas', 'home'],
      },
      {
        id: 'explore',
        title: 'Explore',
        icon: ['fas', 'hashtag'],
      },
      {
        id: 'notifications',
        title: 'Notifications',
        icon: ['fas', 'bell'],
      },
      {
        id: 'messages',
        title: 'Messages',
        icon: ['fas', 'envelope'],
      },
      {
        id: 'bookmarks',
        title: 'Bookmarks',
        icon: ['fas', 'bookmark'],
      },
      {
        id: 'lists',
        title: 'Lists',
        icon: ['fas', 'clipboard-list'],
      },
      {
        id: 'profile',
        title: 'Profile',
        icon: ['fas', 'user'],
      },
    ],
    open: false,
    openDropdown: false,
  })
}
</script>