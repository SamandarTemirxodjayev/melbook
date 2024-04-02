<script setup>
const toast = useToast();

let categories = ref([]);
let urls = reactive([
  {
    youtubeUrl: "",
    name: "YouTube",
  },
]);
let isOpen = ref(false);
let isLoading = ref(true);
let categoryText = ref("");
let editedItem = ref(null);
let isEditOpen = ref(false);

onMounted(async () => {
  try {
    const data = await $fetch(BASE_URL + "/urls", {
      method: "GET",
    });
    urls[0].youtubeUrl = data.data.youtubeUrl;
    isLoading.value = false;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      navigateTo("/exit");
    }
    return console.log(error);
  }
});

const columns = [
  {
    key: "name",
    label: "Nomi",
  },
  {
    key: "youtubeUrl",
    label: "Youtube ssilkasi",
  },
  {
    key: "actions",
    label: "Action",
  },
];
const items = (row) => [
  [
    {
      label: "Tahrirlash",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => editUrls(row),
    },
  ],
];
const editUrls = (row) => {
  isEditOpen.value = true;
};
const editUrlsHandle = async () => {
  isLoading.value = true;
  try {
    await $fetch(BASE_URL + "/urls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        youtubeUrl: urls[0].youtubeUrl,
      }),
    });
    let data = await $fetch(BASE_URL + "/urls", {
      method: "GET",
    });
    urls[0].youtubeUrl = data.data.youtubeUrl;
    isEditOpen.value = false;
  } catch (error) {
    return console.log(error);
  }
  isLoading.value = false;
};
defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isOpen],
    handler: () => {
      isOpen.value = false;
    },
  },
});
</script>

<template>
  <div>
    <div class="text-2xl font-bold">Ssilkalar</div>
    <UTable
      :loading="isLoading"
      :loading-state="{
        icon: 'i-heroicons-arrow-path-20-solid',
        label: 'Yuklanmoqda...',
      }"
      :progress="{ color: 'primary', animation: 'carousel' }"
      :columns="columns"
      :rows="urls"
      :empty-state="{
        icon: 'i-heroicons-circle-stack-20-solid',
        label: 'Bannerlar Mavjud Emas',
      }"
    >
      <template #youtubeUrl-data="{ row }">
        {{}}
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/joARPQJK8vk?si=${row.youtubeUrl}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </template>
      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </template>
    </UTable>

    <UModal v-model="isEditOpen" prevent-close>
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Ssilkani Tahrirlash
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isEditOpen = false"
            />
          </div>
        </template>

        <UForm @submit="editUrlsHandle">
          <UFormGroup
            class="my-[2%]"
            label="Kategoriya Uchun Nom Kiriting"
            name="photo"
            size="lg"
          >
            <UInput type="text" size="lg" v-model="urls[0].youtubeUrl" />
          </UFormGroup>
          <UFormGroup class="my-[2%]" name="submit" size="lg">
            <UButton
              :loading="isLoading"
              type="submit"
              color="primary"
              size="lg"
              block
              >Tasdiqlash</UButton
            >
          </UFormGroup>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>